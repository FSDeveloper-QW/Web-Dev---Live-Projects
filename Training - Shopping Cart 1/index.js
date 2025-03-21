// "app" ID is the element used to contain the Template File Content
// "temporaryContent" ID is where the content of this page is stored

import cart from "./cart.js";
import products from "./products.js";
let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

// Load Template File Content

const loadTemplate = () => {
  fetch("template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      cart();
      initApp();
    });
};
loadTemplate();
const initApp = () => {
  // load list of products
  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = null;
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML =
      '<img src="${product.image}"/><h2>${product.name}</h2><div class="price">$${product.price}</div><button class="addCart" data-id="${product.id}">Add to Cart</button>';
    listProduct.appendChild(newProduct);
  });
};
