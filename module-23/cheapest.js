const phones = [
  {
    name: "vivo",
    camera: "16px",
    storage: "64gb",
    price: 27900,
    color: "black",
  },
  {
    name: "iphone",
    camera: "8px",
    storage: "64gb",
    price: 97900,
    color: "silver",
  },
  {
    name: "xaomi",
    camera: "32px",
    storage: "128gb",
    price: 35900,
    color: "red",
  },
  {
    name: "oppo",
    camera: "16px",
    storage: "64gb",
    price: 22900,
    color: "black",
  },
  { name: "htc", camera: "24px", storage: "64gb", price: 69900, color: "gray" },
  {
    name: "nokia",
    camera: "16px",
    storage: "64gb",
    price: 47900,
    color: "black",
  },
  {
    name: "walton",
    camera: "24px",
    storage: "64gb",
    price: 14900,
    color: "black",
  },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);