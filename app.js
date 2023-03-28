// FOR NAV BAR
let main = document.querySelector('.hero');
let nav = document.querySelector('.nav');

let offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
    if (window.pageYOffset > offset) {
        nav.classList.remove('bottom-nav');
        nav.classList.remove('opaque');
        nav.classList.add('top-nav');
        nav.classList.add('transparent');

    } else {
        nav.classList.add('bottom-nav');
        nav.classList.add('opaque');

        nav.classList.remove('top-nav');
        nav.classList.remove('transparent');
    }
}

// FOR MOBILE MENU
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// FOR FORM

const signUp = document.querySelector('.form-btn');
signUp.addEventListener('click', () => {
    console.log('Hey');
});
function onSubmitFunction() {
    alert('You have Successfully Submitted Your Details');
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

