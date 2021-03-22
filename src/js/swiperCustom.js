const swiper = new Swiper('.slider1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.7,
    spaceBetween: 40,
    initialSlide: 0,
    // Navigation arrows
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
  
});


const newSwiper = new Swiper('.slider2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 40,
    centeredSlidesBounds: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider__next2',
      prevEl: '.slider__prev2',
    },
  
});