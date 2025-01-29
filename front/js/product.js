const url = window.location
const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");

// Retrieves product info from API

fetch('http://localhost:3000/api/products/')
  .then(res => res.json())
  .then(data => {
  
    displayProductDetails(data);
  });


const productName = document.querySelector("#title");
const productImg = document.querySelector(".item__img");
const productDescript = document.querySelector("#description");
const productPrice = document.querySelector("#price");
const productColor = document.querySelector("#colors");
let productQuantity = document.querySelector("#quantity")


// Function to show product details

function displayProductDetails(productDataFromServer) {


  for (product of productDataFromServer) {
    if (id === product._id) {
      productImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
      productName.textContent = `${product.name}`;
      productPrice.textContent = `${product.price}`;
      productDescript.textContent = `${product.description}`;


      for (let color of product.colors) {
        productColor.innerHTML += `<option value=${color}>${color}</option>`
      };
    };
  };
};

// Creates event to add products to cart 

const addToCartBtn = document.getElementById('addToCart');


addToCartBtn.addEventListener('click', (event) => {
  event.preventDefault();
 


  addProductToCart();
});


function cartInitLocalStorage () {


  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]')
  };
}




function addProductToCart() {


  cartInitLocalStorage ();


  const productInfo = {
    id: id,
    name: productName.textContent,
 

    color: productColor.value,
    quantity: productQuantity.value,
    description: productDescript.textContent,
    imageUrl: product.imageUrl,
    altTxt: product.altTxt,
  };


// Adds cart info to local storage

  let cartInfo = JSON.parse(localStorage.getItem('cart'));
 
  let push = true;
  if (productQuantity.value == 0 || productColor.value === "") {
    alert("Add product color and/or quantity");
     
  } else {
       if (cartInfo) {
      cartInfo.forEach(function (product, key) {
        if (product.id == id &&
          product.color == productColor.value) {
                     cartInfo[key].quantity = parseInt(product.quantity) +
            parseInt(productQuantity.value);
                push = false;


       
          cart = localStorage.setItem('cart', JSON.stringify(cartInfo));
          cartInfo = JSON.parse(localStorage.getItem('cart'));
          alert("Congrats! You added a product to your cart!");
        };
      });
    };


    if (push) {
      cartInfo.push(productInfo);


      cart = JSON.stringify(cartInfo);
      localStorage.setItem('cart', cart);
      cartInfo = JSON.parse(cart);
      alert("Congrats! You added a product to your cart!");
    }
  };
};











