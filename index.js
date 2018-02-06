var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { item: Math.floor(Math.random() *100)};
  cart.push = newItem
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var list = "In your cart, you have ";
  for (var i = 0, i < )
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
