var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { [item]: Math.floor(Math.random() *100)};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
  var list = "In your cart, you have ";
  for (var i = 0, i < cart.length - 1, i++) {
    list += `${(Object.key(cart[0]))[0]} at $${(Object.values(cart[0]))[0]}, `;
  }
  list += `and ${(Object.key(cart[0]))[0]} at $${(Object.values(cart[0]))[0]}.`;
  console.log(list);
  }
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
