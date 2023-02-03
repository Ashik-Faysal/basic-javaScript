const shopingCart = [
    { name: "shoe", price: 1200},
    { name: "shirt", price: 1800},
    { name: "pant", price: 2900},
    { name: "watch", price: 3600},
    { name: "sunglass", price: 500},
    { name: "cap", price: 350}
]
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const totalPrice = totalCost(shopingCart);
console.log(totalPrice);