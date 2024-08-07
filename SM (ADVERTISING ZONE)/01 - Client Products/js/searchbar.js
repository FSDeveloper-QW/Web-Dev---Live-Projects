// ============================================================
// TODO:  JAVASCRIPT SEARCH BAR FUNCTIONALITIES
// ============================================================

// ============================================================
// FIXME:  GETTING ALL REQUIRED ELEMENTS
// ============================================================

const searchWrapper = document.querySelector(".top_bar_search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestionBox = searchWrapper.querySelector(
  ".top_bar_search-autocomplete-box"
);
const icon = searchWrapper.querySelector(".top_bar_searchbar-icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// ============================================================
// FIXME:  WHAT HAPPENS WHEN USER PRESS ANY KET AND RELEASE
//         WITHIN TH SEARCH BAR
// ============================================================

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];

  if (userData) {
    // -----------------------------------------------------------------------
    // WHAT HAPPENS WHEN SEARCH-ICON IS CLICKED WITH SEARCH RESULT SELECT
    // IT REDIRECTS THE SELECTION TO THE URL / SPECIFIC PLACE
    // TODO:  FIND OUT HOW TO LINK TO PRODUCT PAGE WITHIN SITE FOR EACH ITEM
    // -----------------------------------------------------------------------

    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };

    // -----------------------------------------------------------------------

    // ----------------------------------
    //   Query the suggestions.js file
    // ----------------------------------

    emptyArray = suggestions.filter((data) => {
      // =====================================================================
      // FILTERING ARRAY VALUE AND USER CHARACTERS TO LOWERCASE AND RETURN
      // ONLY THOSE WORDS / SENTENCES WHICH ARE STARTING WITH THE USER'S
      // ENTERED WORDS
      // =====================================================================
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    // -----------------------------------------------------------------------

    emptyArray = emptyArray.map((data) => {
      // ---------------------------------------
      // PASSING RETURNED DATA INSIDE <li> TAG
      // ---------------------------------------
      //   return (data = "<li>" + data + "</li>");
      return (data = `<li>${data}</li>`);
    });
    // console.log(emptyArray);
    // ------------------------
    // SHOW AUTO-COMPLETE BOX
    // -----------------------
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggestionBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // ----------------------------------------------
      // ADDING "ONCLICK" ATTRIBUTE IN ALL "<li>" TAGS
      // ----------------------------------------------
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    // -----------------------
    // HIDE AUTO-COMPLETE BOX
    // -----------------------
    searchWrapper.classList.remove("active");
  }
};

// ----------------------------------------------------
// THIS FUNCTION PASSES THE USER'S SELECTED LIST ITEM
// FROM THE DROP-DOWN LIST IN THE TEXT FIELD OF THE
// SEARCH BOX
// ----------------------------------------------------

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;

  // -----------------------------------------------------------------------
  // WHAT HAPPENS WHEN SEARCH-ICON IS CLICKED WITH SEARCH RESULT SELECT
  // IT REDIRECTS THE SELECTION TO THE URL / SPECIFIC PLACE
  // TODO:  FIND OUT HOW TO LINK TO PRODUCT PAGE WITHIN SITE FOR EACH ITEM
  // -----------------------------------------------------------------------

  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectUserData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };

  // -----------------------
  // HIDE AUTO-COMPLETE BOX
  // -----------------------
  searchWrapper.classList.remove("active");
}

// ----------------------------------------------------

function showSuggestions(list) {
  let listData;

  if (!list.length) {
    userValue = inputBox.value;
    // listData = "<li>" + userValue + "</li>";
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggestionBox.innerHTML = listData;
}
