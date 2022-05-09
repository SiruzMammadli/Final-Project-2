// HEADER HIDE/SHOW ON SCROLL

function headerScroll() {
    if (window.innerWidth > 1200) {
        let header = document.querySelector('.header'),
            headerHeight = header.clientHeight,
            curScrollHeight = 0;

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset;

            if (scrollTop > curScrollHeight && window.scrollY > 85) {
                header.style.top = -headerHeight + 'px';
            } else {
                header.style.top = '0';
            }
            curScrollHeight = scrollTop;
        })
    }
}

headerScroll();

// RESPONSIVE NAVBAR CLICK FUNCTION

let openMenuBtn = document.querySelector('.header .wrapper .respons .hamburger-box'),
    closeMenuBtn = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close'),
    mobileNav = document.querySelector('.header .mobile-nav-container'),
    hamburgerIcon = document.querySelector('.header .mobile-nav-container .mobile-nav .menu-close .hamburger-icon'),
    body = document.querySelector('body');

function openMenu() {
    mobileNav.classList.add('on');
    hamburgerIcon.classList.add('active');
    body.classList.add('no-scroll');
}

function closeMenu() {
    mobileNav.classList.toggle('on');
    body.classList.toggle('no-scroll')
}

// RESPONSIVE NAVBAR MENU LIST

let accordion = function() {
    let dropLinks = document.querySelectorAll('.header .mobile-nav-container .resp-nav-menu .drop-menu-li');

    let clickCall = function() {

        // Click olunan liste show classi elave etmek ucun
        this.classList.toggle('show');

        for (let i = 0; i < dropLinks.length; i++) {

            //listde show classina sahil olan varsa ve bu click olunan list deyilse class adini silmek ucun
            if (dropLinks[i].classList.contains('show') && dropLinks[i] != this) {
                dropLinks[i].classList.remove('show');
            }
        }
    }
    
    for ( let i = 0; i < dropLinks.length; i++) {
        dropLinks[i].addEventListener('click', clickCall);
    }
}

accordion();


// WEB DESIGN TRAINING PAGE

// TAB MENU

let tabBtns = document.querySelectorAll('.entry-content .entry-content-left .entry-tab-head .tab-menu li'),
    tabContents = document.querySelectorAll('.entry-content .entry-content-left .entry-tab-body .tab-content');

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
            
                    // title button ile content ID leri eyni deyilse active classini silmek ucun
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

let curriculumList = document.querySelectorAll('.entry-tab-body .curriculum .list'),
    curriculumBtns = document.querySelectorAll('.entry-tab-body .curriculum .list .list-head');

curriculumBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // CurriculumList in parentini elde etmek ucun
        list = btn.parentNode

        // Eger list closed classina sahib deyilse elave et sahibdirse silmek ucun
        if(!list.classList.contains('closed')) {
            list.classList.add('closed');
        } else {
            list.classList.remove('closed');
        }
    })
})

// END OF CURRICULUM LISTS