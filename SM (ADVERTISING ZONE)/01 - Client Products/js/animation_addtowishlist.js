// -----------------------------------------------------------------------------
// TODO:  SCRIPT TO ADD COUNTER TO WISH LIST WHEN "ADD TO WISH LIST" IS CLICKED
// -----------------------------------------------------------------------------

let wishCount = 0;

const wishCounter = document.getElementById("wishlist-counter");
document
  .getElementById("wishlist-add-animation")
  .addEventListener("click", (event) => {
    const clWish = wishCounter.classList;
    const cWish = "wishlist-animated-counter";
    wishCount++;

    wishCounter.innerText = wishCount;
    clWish.remove(cWish, clWish.contains(cWish));
    setTimeout(() => wishCounter.classList.add("wishlist-animated-counter"), 1);
  });
