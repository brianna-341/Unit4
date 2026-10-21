const pets = [
  //puppies
  {
    breed: "Pitbull Terrier",
    breedgroup: "Terrier",
    category: "puppies",
    price: 693,
  },
  {
    breed: "Shih Tzu",
    breedgroup: "Toy",
    category: "puppies",
    price: 1091,
  },
  {
    breed: "Cheweenie",
    breedgroup: "Mixes",
    category: "puppies",
    price: 477,
  },
  {
    breed: "Basset Hound",
    breedgroup: "Sporting",
    category: "puppies",
    price: 1307,
  },
  //cats
  {
    breed: "Munchkin",
    coating: "Long & Short",
    category: "kittens",
    price: 1507,
  },
  {
    breed: "Ragdoll",
    coating: "Semi-Longhaired",
    category: "kittens",
    price: 2520,
  },
  {
    breed: "Siamese",
    coating: "Short Haired",
    category: "kittens",
    price: 670,
  },

  {
    breed: "Himalayn",
    breedgroup: "Long Haired",
    category: "birds",
    price: 1507,
  },
  //birds
  {
    breed: "Blue-Headed Pionus",
    breedgroups: "Pionus",
    category: "birds",
    price: 3750,
  },
  {
    breed: "Zebra Finch",
    breedgroups: "Finch",
    category: "birds",
    price: 50,
  },
  {
    breed: "Umbrella Cockatoo",
    breedgroups: "Cockatoo",
    category: "birds",
    price: 2760,
  },
  {
    breed: "Cockateel",
    size: "Cockateel",
    category: "birds",
    price: 275,
  },
  //Rodents
  {
    breed: "Russian Dwarf Hamster",
    breedgroup: "Hamster",
    category: "Rodents",
    price: 20,
  },
  {
    breed: "Continteial Rabbit",
    breedgroup: "Rabbit",
    category: "Rodents",
    price: 507,
  },
  {
    breed: "Fancy Mouse",
    breedgroup: "Mouse",
    category: "Rodents",
    price: 10,
  },
  {
    breed: "Abyssinian Guinea Pig",
    breedgroup: "Guinea Pig",
    category: "Rodents",
    price: 2378,
  },
];
function buyPetFilter(breeds, targetBreed) {
  return breeds.filter((breeds) => breeds.category === targetBreed);
}
console.log(buyPetFilter(pets, "Rodents"));

cart = [];
total = 0;
function addToCarts(items, qty) {}

console.log(addToCarts("Guinea Pig", 2));

// function addToCart(item) {}

// const cart = {Shoes:{name: "Shoes", price:80,qty:4}}
// function addToCart(item){
//   if (cart[item.name]){
//     cart[item.name].qty++
//   }else {
//     cart[item.name] = item
//   }
// }
// addToCart({name:"watch",price:80,qty:1})
