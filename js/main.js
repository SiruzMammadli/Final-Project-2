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

// RESPONSIVE NAVBAR MENU LIST

let itemNavLink = document.querySelectorAll('.header .mobile-nav-container .resp-nav-menu .drop-menu-li');

itemNavLink.forEach( items => {
    items.addEventListener('click', evnt => {

        let subMenu = items.querySelector('.sub-menu');
        // let currentList = document.querySelector('.header .mobile-nav-container .resp-nav-menu .drop-menu-li.show')
        
        items.classList.toggle('show');
        
        if(items.classList.contains('show')) {
            
            
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        } else {
            subMenu.style.maxHeight = 0;
        }
        
    });
})