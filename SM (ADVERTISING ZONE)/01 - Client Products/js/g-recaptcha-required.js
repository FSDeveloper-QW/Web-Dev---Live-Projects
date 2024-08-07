// ================================================================================================
// TODO:  JAVASCRIPT CODE TO MAKE THE GOOGLE RECAPTCHA A REQUIRED SELECTION IN ANY FORM SUBMISSION
// ================================================================================================

window.onload = function () {
  var el = document.getElementById("g-recaptcha-response");
  if (el) {
    el.setAttribute("required", "required");
  }
};
