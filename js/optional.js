

    $('.main-nav__link').on('click', function (e) {
      e.preventDefault();
      let href = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 800);
    });


    $('.bottel-list').slick({
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      arrows: true,
      prevArrow: '#slick-p',
      nextArrow: '#slick-n',
      autoplay: false,
      centerPadding: 0,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      pauseOnFocus: false,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: false,
            slidesToScroll: 1
          }
        }
      ]
    })
  