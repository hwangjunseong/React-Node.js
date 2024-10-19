const express = require("express");
const session = require("express-session");
const cors = require("cors");
const qs = require("qs"); //query string
const axios = require("axios"); //axios는 HTTP 요청을 보내기 위한 라이브러리 ,Promise 기반이기 때문에 비동기 처리를 쉽게함
const app = express();
const port = 4008;
const client_id = "329ca7e85edc188c36d2f6d8458ad2a0"; //rest api key
const redirect_uri = "http://localhost:4000/oauth/redirect";
const token_uri = "https://kauth.kakao.com/oauth/token";
const api_host = "https://kapi.kakao.com";
const client_secret = "";
const origin = "http://localhost:4000";
//정적파일 저장할 폴더명
app.use(express.static("kakao-demo"));
app.use(
  session({
    secret: "your session secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
let corsOptions = {
  origin: origin,
  credentials: true,
};
app.use(cors(corsOptions));

//1. 카카오 계정으로 로그인 버튼 클릭시
app.get("/authorize", function (req, res) {
  let { scope } = req.query;
  console.log("scope: " + scope);
  let scopeParam = "";
  if (scope) {
    scopeParam = "&scope=" + scope;
  }
  console.log("scopeParam: " + scopeParam);
  console.log(
    14,
    `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code${scopeParam}`
  );
  res
    .status(302)
    .redirect(
      `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code${scopeParam}`
    );
});

async function call(method, uri, param, header) {
  try {
    rtn = await axios({
      method: method,
      url: uri,
      headers: header,
      data: param,
    });
  } catch (err) {
    rtn = err.response;
  }
  return rtn.data;
}
//redirect uri
app.get("/oauth/redirect", async function (req, res) {
  //access token 발급
  const param = qs.stringify({
    grant_type: "authorization_code",
    client_id: client_id,
    redirect_uri: redirect_uri,
    client_secret: client_secret,
    code: req.query.code,
  });
  console.log("code :", req.query.code);
  const header = { "content-type": "application/x-www-form-urlencoded" };
  var rtn = await call("POST", token_uri, param, header);
  //rtn에는 access token과 refresh token 준다
  /*
rtn  {
  access_token: 'wRipfmLdpqdSsZou8Vgl5c-NEllr_uX-AAAAAQorDKYAAAGSZaUTrke54X7lJw5n',
  token_type: 'bearer',
  refresh_token: 'g1j4yni9Ze2hC6hpE_Ew9rLdmxovdEWVAAAAAgorDKYAAAGSZaUTrEe54X7lJw5n',
  expires_in: 21599,
  refresh_token_expires_in: 5183999
}

  */
  //서버에 refresh token 저장하고 클라이언트에게 access token과 refresh token 주면 될듯
  console.log(1);
  console.log("rtn ", rtn);
  //access token session에 저장
  req.session.key = rtn.access_token;
  res.status(302).redirect(`${origin}/demo.html`);
});

app.get("/profile", async function (req, res) {
  const uri = api_host + "/v2/user/me";
  const param = {};
  const header = {
    "content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + req.session.key,
  };
  var rtn = await call("POST", uri, param, header);
  console.log(2);
  console.log("rtn ", rtn);
  //rtn  { id: 3736476156, connected_at: '2024-10-07T03:31:46Z' }
  res.send(rtn);
});

app.get("/friends", async function (req, res) {
  const uri = api_host + "/v1/api/talk/friends";
  const param = null;
  const header = {
    Authorization: "Bearer " + req.session.key,
  };
  var rtn = await call("GET", uri, param, header);
  console.log(4);
  console.log("rtn ", rtn);
  res.send(rtn);
});

app.get("/message", async function (req, res) {
  const uri = api_host + "/v2/api/talk/memo/default/send";
  const param = qs.stringify({
    template_object:
      "{" +
      '"object_type": "text",' +
      '"text": "텍스트 영역입니다. 최대 200자 표시 가능합니다.",' +
      '"link": {' +
      '    "web_url": "https://developers.kakao.com",' +
      '    "mobile_web_url": "https://developers.kakao.com"' +
      "}," +
      '"button_title": "바로 확인"' +
      "}",
  });
  const header = {
    "content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + req.session.key,
  };
  const rtn = await call("POST", uri, param, header);
  console.log(3);
  console.log("rtn ", rtn);
  res.send(rtn);
});

app.get("/friends_message", async function (req, res) {
  const uri = api_host + "/v1/api/talk/friends/message/default/send";
  let { uuids } = req.query;
  const param = qs.stringify({
    receiver_uuids: "[" + uuids + "]",
    template_object:
      "{" +
      '"object_type": "text",' +
      '"text": "텍스트 영역입니다. 최대 200자 표시 가능합니다.",' +
      '"link": {' +
      '    "web_url": "https://developers.kakao.com",' +
      '    "mobile_web_url": "https://developers.kakao.com"' +
      "}," +
      '"button_title": "바로 확인"' +
      "}",
  });
  const header = {
    "content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + req.session.key,
  };
  const rtn = await call("POST", uri, param, header);
  console.log(5);
  console.log("rtn ", rtn);
  res.send(rtn);
});

app.get("/logout", async function (req, res) {
  const uri = api_host + "/v1/user/logout";
  const param = null;
  const header = {
    Authorization: "Bearer " + req.session.key,
  };
  var rtn = await call("POST", uri, param, header);
  console.log(6);
  console.log("rtn ", rtn);
  res.send(rtn);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
