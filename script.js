const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
  },

  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: 4 }, // Para telas pequenas (celulares)
    768: { slidesPerView: 3, spaceBetween: 5 }, // Para tablets
    1024: { slidesPerView: 4, spaceBetween: 4 }, // Para desktops
  },
});

