let book = {
  title: "Node.js",

  price: 20000,

  description: "book detail",

  //   user_id: `${req.params.productId}`,
};
function print(book) {
  console.log(book.title, book.price, book.description);
}
// console.log(book.title, book.price, book.description);
print(book);
