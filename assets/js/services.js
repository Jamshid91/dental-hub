services = new Swiper('.swiper-block2', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-block2-next',
      prevEl: '.swiper-block2-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row'
              },
        },
        576: {
            slidesPerView: 1,
            grid: {
                rows: 3,
                fill: 'row'
              },
        },
      991: {
          slidesPerView: 2,
          grid: {
              rows: 3,
              fill: 'row'
            },
      },
  }
  });