// ========================================================================================================
// TODO:  SCRIPT DESCRIPTION: MAKING THE ANIMATION TO WORK BETWEEN THE SIGN-IN & SIGN-UP SECTIONS     TODO:
// 1.  ADD A CLASS TO THE CONTAINER ELEMENT
// 2.  WHEN YOU CLICK ON THE "SIGN-UP" BUTTON IN THE ONE PANEL, AND REMOVE IT ...
// 3.  WHEN YOU CLICK ON THE "SIGN-IN" BUTTON IN THE OTHER PANEL
// ========================================================================================================

// --------------------------------------------------------------------------------------------------------
// FIXME:  Set constants that link to the HTML Document with the "ID's" (#) & "CLASS" in the Markup  FIXME:
// --------------------------------------------------------------------------------------------------------

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(
  ".shopper__login__registration__container"
);

// --------------------------------------------------------------------------------------------------------
// FIXME:  Add "Click" Event Listners to the Constants                                               FIXME:
// --------------------------------------------------------------------------------------------------------

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
