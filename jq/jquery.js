$('.your-question h6').click(function () {
  $(this).siblings('.your-question p').slideToggle().parent().siblings().children('.your-question p').slideUp();
  $(this).toggleClass('active').parent().siblings().children('h6').removeClass('active');
  if ($(this).hasClass("active")) {
    $(this).parent(".your-question").addClass("active");
  } else {
    $(this).parent(".your-question").removeClass("active");
  }


});


// SLIDER DUPLICAT KEY MACHINE
$('.key-machine').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  fade: true,
  dots: false,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  asNavFor: '.key-machine-nav',
});
$('.key-machine-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.key-machine',
  dots: false,
  prevArrow: false,
  nextArrow: false,
  centerMode: false,
  focusOnSelect: true
})


// QUANTITY COUNTER
$(document).ready(function () {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// PRODUCT DETAIL SLIDER
$('.product-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  fade: true,
  dots: false,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  asNavFor: '.product-thumbail-img',

});
$('.product-thumbail-img').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  prevArrow: false,
  nextArrow: false,
  
  asNavFor: '.product-img-slider',
  focusOnSelect: true,
  responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1369,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,

      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})



// Bunble slider on mobile
if (window.innerWidth < 1025) {
  /* the viewport is less than 768 pixels wide */
  $('.fav-bundle').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    mobileFirst: true,
    draggable: false,
    responsive: [{
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          draggable: false,
          nextArrow:false,
          prevArrow:false
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:true,
          nextArrow:false,
          prevArrow:false,
          draggable: false
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: false
        }
      }

      ]
    });
} 
