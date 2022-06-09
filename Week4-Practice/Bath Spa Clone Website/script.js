const menuIn = () => {
    const menu = document.querySelector('#menuId');
    
    if ( menu.classList.value === 'menu' ) {
        menu.classList.replace('menu', 'menu-live');
    } else {
        menu.classList.replace('menu-live', 'menu');
    }
}

const home = document.querySelector('#a-home')
const about = document.querySelector('#a-about')
const courses = document.querySelector('#a-courses')
const contact = document.querySelector('#a-contact')

const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', menuIn);

home.addEventListener('click', menuIn);
about.addEventListener('click', menuIn);
courses.addEventListener('click', menuIn);
contact.addEventListener('click', menuIn);