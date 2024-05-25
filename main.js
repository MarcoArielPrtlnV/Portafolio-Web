import scrollTopButton from "./scroll_btn.js";
import toggleMenu from "./menu.js";


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

    scrollTopButton('.scroll-top-btn');
    toggleMenu();

});