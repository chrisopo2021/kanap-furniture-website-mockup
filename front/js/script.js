// Begins retreiving data from API

fetch('http://localhost:3000/api/products/')
        .then(res => res.json())
        .then(data => {
                displayProducts(data);
        })

// Builds product info from API

function displayProducts(itemList) {
         const productDisplay = document.querySelector("#items")
                for (let i in itemList) {
                productDisplay.innerHTML += `
                <a href="./product.html?id=${itemList[i]._id}">
                <article>
                <img src="${itemList[i].imageUrl}" alt="${itemList[i].altTxt}">
                <h3 class="productName">${itemList[i].name}</h3>
                <p class="productDescription">${itemList[i].description}</p>
                </article>
                </a>
                `
        };
};
