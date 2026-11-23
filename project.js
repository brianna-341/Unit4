const pets = [
  //puppies
  {
    breed: "Pitbull Terrier",
    breedgroup: "Terrier",
    category: "puppies",
    price: 693,
    img: "img/1.jpg",
  },
  {
    breed: "Shih Tzu",
    breedgroup: "Toy",
    category: "puppies",
    price: 1091,
    img: "img/2.jpg",
  },
  {
    breed: "Cheweenie",
    breedgroup: "Mixes",
    category: "puppies",
    price: 477,
    img: "img/3.jpg",
  },
  {
    breed: "Basset Hound",
    breedgroup: "Sporting",
    category: "puppies",
    price: 1307,
    img: "img/4.jpg",
  },
  //cats
  {
    breed: "Munchkin",
    coating: "Long & Short",
    category: "kittens",
    price: 1507,
    img: "img/5.jpg",
  },
  {
    breed: "Ragdoll",
    coating: "Semi-Longhaired",
    category: "kittens",
    price: 2520,
    img: "img/6.jpg",
  },
  {
    breed: "Siamese",
    coating: "Short Haired",
    category: "kittens",
    price: 670,
    img: "img/7.jpg",
  },

  {
    breed: "Himalayn",
    breedgroup: "Long Haired",
    category: "birds",
    price: 1507,
    img: "img/8.jpg",
  },
  //birds
  {
    breed: "Blue Headed Pionus",
    breedgroups: "Pionus",
    category: "birds",
    price: 3750,
    img: "img/9.jpg",
  },
  {
    breed: "Zebra Finch",
    breedgroups: "Finch",
    category: "birds",
    price: 50,
    img: "img/10.jpg",
  },
  {
    breed: "Umbrella Cockatoo",
    breedgroups: "Cockatoo",
    category: "birds",
    price: 2760,
    img: "img/11.jpg",
  },
  {
    breed: "Cockateel",
    size: "Cockateel",
    category: "birds",
    price: 275,
    img: "img/a.jpg",
  },
  //Rodents
  {
    breed: "Russian Dwarf Hamster",
    breedgroup: "Hamster",
    category: "Rodents",
    price: 20,
    img: "img/13.jpg",
  },
  {
    breed: "Continteial Rabbit",
    breedgroup: "Rabbit",
    category: "Rodents",
    price: 507,
    img: "img/14.jpg",
  },
  {
    breed: "Fancy Mouse",
    breedgroup: "Mouse",
    category: "Rodents",
    price: 10,
    img: "img/15.jpg",
  },
  {
    breed: "Abyssinian Guinea Pig",
    breedgroup: "Guinea Pig",
    category: "Rodents",
    price: 2378,
    img: "img/16.jpg",
  },
];
function buyPetFilter(breeds, targetBreed) {
  return breeds.filter((breeds) => breeds.category === targetBreed);
}
console.log(buyPetFilter(pets, "Rodents"));

function inject(pet) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `  <div class="card" data-item=${pet.breedgroup}>
    <div class="card-content">
    <h2 class="card-header">${pet.breed}</h2>
    <img class="card-img" src="${pet.img}" alt="" />
    <p class= "card-price">$${pet.price}</p>
    <button class="card-btn">Add to Cart</button>
    </div>
    </div>`,
  );
}
pets.forEach((pet) => {
  inject(pet);
});

// const buttons = document.querySelectorAll("card-button");
// console.log(buttons);

// buttons.forEach((button) =>
//   button.addEventListener("click", function (event) {
//     console.log(event.target.closest(".card").getAttributes("data-item"));
//     //go find item ina array
//     //items[data-item]
//   }),
// );

// function showCart() {
//   document.querySelector(".pop").style.display = "flex";
// }
// showCart();
function togglePopup() {
  document.getElementById("popup").classList.toggle("show");
}
(function () {
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });
})();
// cart = [];
// total = 0;
// function addToCarts(items, qty) {}
// addToCarts("Abyssinian Guinea Pig", 2);
// console.log(cart);

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
