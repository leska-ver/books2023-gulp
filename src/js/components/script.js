document.addEventListener('DOMContentLoaded', function() {  
  //alert('работает');Ищет ошибки по строчно
  // console.log('Я здесь!');


  //swiper - Hero
  const swiperOhero = document.querySelector(".hero")
  //Для обёртки if
  if (swiperOhero) {//Обёртка if. Спасение Gulp-а от null в браузере  
    const heroSwiper = new Swiper(".hero__swiper", {  
    slidesPerView: .49,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
};


  //swiper - Post
  const swiperOpost = document.querySelector(".post")
  //Для обёртки if
  if (swiperOpost) {//Обёртка if. Спасение Gulp-а от null в браузере    
    const postSwiper = new Swiper(".post__swiper", {
      pagination: {
        el: ".post__pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView:1,
          spaceBetween: 32,
        },

        500: {
          slidesPerView:2,
          spaceBetween: 32,
        },

        700: {
          slidesPerView:3,
          spaceBetween: 32,
        }},

      //Бесконечное листание страниц
      speed: 1000,//Интервал ожидания

      autoplay: {
        delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
      },

    });
  }; 




});


