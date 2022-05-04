// RESPONSIVE NAVBAR CLICK FUNCTION

// const openMenuBtn = document.querySelector('.header .wrapper .respons .hamburger-box');
// const closeMenuBtn = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close');
// let mobileNav = document.querySelector('.header .mobile-nav-container');
// let hamburgerIcon = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close .hamburger-icon')

// openMenuBtn.addEventListener('click', () => {
//     mobileNav.classList.add('on');
//     hamburgerIcon.classList.add('active');
// });

// closeMenuBtn.addEventListener('click', () => {
//     mobileNav.classList.toggle('on');
// });

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
});




// WEB DESIGN TRAINING PAGE

// TAB MENU

let tabBtns = document.querySelectorAll('.entry-content .entry-content-left .entry-tab-head .tab-menu li');
let tabContents = document.querySelectorAll('.entry-content .entry-content-left .entry-tab-body .tab-content');

tabBtns.forEach(
    function(listSelf, listIndex) {
        // console.log(listSelf);
        // console.log(listIndex);

        listSelf.addEventListener('click', function() {

            tabBtns.forEach(
                function(listSelf) {
                    listSelf.classList.remove('active');
                }
            )

            this.classList.add('active');

            tabContents.forEach(
                function(contentSelf, contentIndex) {
            
                    if(contentIndex == listIndex) {
                        contentSelf.classList.add('active')
                    } else {
                        contentSelf.classList.remove('active');
                    }

                }
            )

        })
    }
)

// END OF TAB MENU

// CURRICULUM LISTS

let curriculumList = document.querySelectorAll('.entry-tab-body .curriculum .list');
let curriculumBtns = document.querySelectorAll('.entry-tab-body .curriculum .list .list-head');

curriculumBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // CurriculumList in parentini elde etmek
        list = btn.parentNode

        // Eger list closed classina sahib deyilse elave et sahibdirse sil
        if(!list.classList.contains('closed')) {
            list.classList.add('closed');
        } else {
            list.classList.remove('closed');
        }
    })
})

// END OF CURRICULUM LISTS