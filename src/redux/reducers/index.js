const initState = {
  items: [
    {
      id: 1,
      title: "Fender Amp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1099.99,
      img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-241f11485e4b2978__hmac-2e51d9a156a8b94d1d39d962efd49c33ce063c10/images/items/750/PrinceRev65FSR-large.jpg.auto.webp",
    },
    {
      id: 2,
      title: "Mustang Bass",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 699.99,
      img: "https://cdn.shopify.com/s/files/1/0343/4368/2183/products/fender-bass-guitars-4-string-fender-player-mustang-bass-capri-orange-0144053582-17220680253575_2000x.jpg?v=1620353473",
    },
    {
      id: 3,
      title: "Fuzzolo Pedal",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 129.99,
      img: "https://media.guitarcenter.com/is/image/MMGS7/Fuzzolo-Fuzz-Guitar-Effects-Pedal/J11395000000000-00-500x500.jpg",
    },
    {
      id: 4,
      title: "Fender Jazzmaster",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 829.99,
      img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-5b118fde10004187__hmac-18419b55f38f97744ec2e2f173d34e9b41291907/images/guitars/JazzPPCO/MX21122009/MX21122009-body-large.jpg.auto.webp",
    },
    {
      id: 5,
      title: "Holy Grail Reverb Pedal",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 130.99,
      img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-4a494f7c11aa37dc__hmac-50810ef71428ffeaddc7add640ba5b59efdb6e95/images/items/750/HolyGrailN-large.jpg.auto.webp",
    },
    {
      id: 6,
      title: "Guitar Strings",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 9.99,
      img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-632ae833e9f29bc9__hmac-7102800cf1fce9dca19c6a5eac2d13f49b173819/images/items/750/EB2221-large.jpg.auto.webp",
    },
  ],
  addedItems: [],
  total: 0,
};
const mainReducer = (state = initState, action) => {
  return state;
};
export default mainReducer;
