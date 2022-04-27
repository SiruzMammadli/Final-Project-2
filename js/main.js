// RESPONSIVE NAVBAR CLICK FUNCTION

const openMenuBtn = document.querySelector('.header .wrapper .respons .hamburger-box');
const closeMenuBtn = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close');
let mobileNav = document.querySelector('.header .mobile-nav-container');
let hamburgerIcon = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close .hamburger-icon')

openMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('on');
    hamburgerIcon.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('on');
});