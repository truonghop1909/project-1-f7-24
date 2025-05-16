//Button Menu Mobile
const buttonMenuMobile = document.querySelector('.header .inner-menu-mobile');
if(buttonMenuMobile) {
    const menu = document.querySelector(".header .inner-menu");
    const overlay = document.querySelector(".header .inner-menu .inner-overlay");

    buttonMenuMobile.onclick = () => {
        menu.setAttribute("show", "yes");
    }
    overlay.onclick = () => {
        menu.setAttribute("show", "");
    }
}
//End Button Menu Mobile

//Khởi tạo AOS 
AOS.init();
//Hết khởi tạo AOS 

//Khởi tạo swiper blog 
var swiper = new Swiper(".swiper-blog", {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
//Hết khởi tạo swiper blog 

//ViewerSJ
new Viewer(document.querySelector('.section-2'));
//Hết ViewerSJ
