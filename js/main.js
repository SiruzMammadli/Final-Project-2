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

let lists = document.querySelectorAll('.header .mobile-nav-container .resp-nav-menu li');
let chevronBtn = document.querySelectorAll('.header .mobile-nav-container .resp-nav-menu li a span');
let subMenu = document.querySelectorAll('.header .mobile-nav-container .resp-nav-menu li .sub-menu');

// for (let i = 0; i < lists.length; i++) {
//     lists[i].addEventListener('click', function() {
        
//         if(!this.classList.contains('show')) {
//             this.classList.add('show');

//             let menu = subMenu[i];
//             menu.style.height = 'auto';
            
//             let height = menu.clientHeight + 'px';
            
//             menu.style.height = '0px';

//             setTimeout(() => {
//                 menu.style.height = height
//             },0)
//         } else {
//             menu.style.height = '0px';

//             menu.addEventListener('transitionend', () => {
//                 lists[i].classList.remove('show');
//             });
//         }
//     });
// }