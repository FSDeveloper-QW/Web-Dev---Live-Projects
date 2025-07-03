// =================================================================================================
// JAVASCRIPT (FORM AUTHENTICATION): MAKE THE GOOGLE RECAPTCHA A REQUIREMENT IN ANY FORM SUBMISSION
// =================================================================================================

window.onload = function () {
  var el = document.getElementById("g-recaptcha-response");
  if (el) {
    el.setAttribute("required", "required");
  }
};
