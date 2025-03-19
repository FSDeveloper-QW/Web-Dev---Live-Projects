// OPEN AND CLOSES SHOPPING CART

import products from "./products.js";
const cart = () => {
  let iconCart = document.querySelector(".icon-cart");
  let closeBtn = document.querySelector(".cartTab .close");
  let body = document.querySelector("body");
  let cart = [];

  iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  closeBtn.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  const setProductinCart = (idProduct, quantity, position) => {
    if (quantity > 0) {
      if (position < 0) {
        cart.push({
          product_id: idProduct,
          quantity: quantity,
        });
      } else {
        cart[position].quantity = quantity;
      }
    }
    refreshCartHTML();
  };

  const refreshCartHTML = () => {
    let listHTML = document.querySelector(".listCart");
    let totalHTML = document.querySelector(".icon-cart span");
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
    });
    totalHTML.innerText = totalQuantity;
  };
  // EVENT CLICK
  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let position = cart.findIndex((value) => value.product_id == idProduct);
    let quantity = position < 0 ? 0 : cart[position].quantity;

    if (buttonClick.classList.contains("addCart")) {
      quantity++;
      setProductInCart(idProduct, quantity, position);
    }
  });
};
export default cart;
