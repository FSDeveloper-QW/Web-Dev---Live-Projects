// -----------------------------------------------------------------------------
// TODO:  SCRIPT TO ADD COUNTER TO SHOPPING CART WHEN "ADD TO CART" IS CLICKED
// -----------------------------------------------------------------------------

let shopCount = 0;

const shopCounter = document.getElementById("counter");
document.getElementById("add-animation").addEventListener("click", (event) => {
  const clShop = shopCounter.classList;
  const cShop = "animated-counter";
  shopCount++;

  shopCounter.innerText = shopCount;
  clShop.remove(cShop, clShop.contains(cShop));
  setTimeout(() => shopCounter.classList.add("animated-counter"), 1);
});
