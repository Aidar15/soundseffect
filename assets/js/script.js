//Общие

const blocks = document.querySelector('.download__item');
const blockButtons = document.querySelectorAll('.download__item-button');

for (let index = 0; index < blockButtons.length; index++) {
  const blockButton = blockButtons[index];
  
  blockButton.onmouseenter = function(e)
  {
    this.parentNode.classList.toggle('active');
    e.preventDefault();
  }

blockButton.onmouseout = function(e)
  {
    this.parentNode.classList.remove('active');
    e.preventDefault();
  }
}

// Меню бургер

const iconMenu = document.querySelector('.page-header__burger');
const menuBody = document.querySelector('.page-header__nav');

if(iconMenu) {
    
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Слайдер swiper

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 1,
    slideActiveClass: 'swiper-slide-active',
    loop: true,

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerGroup: 3,
      },

      1244: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerGroup: 3,
      },
    },

coverflowEffect: {
   rotate: 0,
   stretch: 0,
   depth: 0,
   modifier: 0,
 },

 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicMainBullets: 3,
},

 });

