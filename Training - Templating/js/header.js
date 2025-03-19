// CREATING A CUSTOM ELEMENT - IMPORT THE HEADER ELEMENT AS TEMPLATE IN VARIOUS OTHER HTML PAGES

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "";
  }
}

customElements.define("custom-header", MyHeader);
