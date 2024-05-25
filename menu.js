const d = document;

let menu = d.getElementById('menu');
let toggle_open = d.getElementById('toggle-open');
let toggle_close = d.getElementById('toggle-close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu)

export default function toggleMenu() {

    menu.classList.toggle('show-menu');

    if(menu.classList.contains('show-menu')) {

        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';

    } else {

        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none'; 
    }

}