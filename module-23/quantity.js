const shopingCart = [
  { name: "shoe", price: 1200 , quantity: 3},
  { name: "shirt", price: 1800 , quantity: 4},
  { name: "pant", price: 2900 , quantity: 4},
  { name: "watch", price: 3600 , quantity: 2},
  { name: "sunglass", price: 500 , quantity: 3},
  { name: "cap", price: 350 , quantity: 2},
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productTotal = product.price * product.quantity;
      sum = sum + productTotal;
  }
  return sum;
}
const totalPrice = totalCost(shopingCart);
console.log(totalPrice);
