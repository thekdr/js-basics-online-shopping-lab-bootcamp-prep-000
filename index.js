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
  var list = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    list += `${(Object.keys(cart[0]))[0]} at $${(Object.values(cart[0]))[0]}.`;
    console.log(list);
  } else {  
    for (var i = 0; i < cart.length - 1; i++) {
      list += `${(Object.keys(cart[i]))[0]} at $${(Object.values(cart[i]))[0]}, `;
    }
    list += `and ${(Object.keys(cart[cart.length - 1]))[0]} at $${(Object.values(cart[cart.length - 1]))[0]}.`;
    console.log(list);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt((Object.values(cart[i]))[0]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
