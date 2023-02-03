const phones = [
  {
    name: "vivo",
    camera: "16px",
    storage: "64gb",
    price: 27900,
    color: "black",
  },
  {
    name: "xaomi",
    camera: "32px",
    storage: "48gb",
    price: 35900,
    color: "red",
  },

  {
    name: "oppo",
    camera: "16px",
    storage: "128gb",
    price: 22900,
    color: "black",
  },
  { name: "htc", camera: "24px", storage: "32gb", price: 69900, color: "gray" },
  {
    name: "nokia",
    camera: "16px",
    storage: "16gb",
    price: 47900,
    color: "black",
  },
  {
    name: "iphone",
    camera: "8px",
    storage: "256gb",
    price: 97900,
    color: "silver",
  },
  {
    name: "walton",
    camera: "24px",
    storage: "64gb",
    price: 14900,
    color: "black",
  },
];
function goodCamera(phones) {
  let gCamera = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const cameras = phones[i];
    if (cameras.camera > gCamera.camera) {
      gCamera = cameras;
    }
    }
    return gCamera;
}
const myCamera = goodCamera(phones);
console.log(myCamera);
