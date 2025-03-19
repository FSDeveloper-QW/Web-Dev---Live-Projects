// CREATING A CUSTOM ELEMENT - IMPORT THE HEADER ELEMENT AS TEMPLATE IN VARIOUS OTHER HTML PAGES

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<footer>2025 Name of Company</footer>";
  }
}

customElements.define("custom-footer", MyFooter);
