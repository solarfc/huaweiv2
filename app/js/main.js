"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      increase date
   */
  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('span output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear().toString().slice(2);

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year);
  }
  /*
      loop fancybox
   */


  $.fancybox.defaults.loop = true;
  /*
      slider settings
   */

  var sliderSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    cssEase: 'linear',
    dots: '',
    arrow: '',
    prevArrow: '',
    nextArrow: ''
  };
  /*
      catalog slider
   */

  var bluePhone = $('.catalog__content-block.blue .catalog__content-block__info .images .slider'),
      blackPhone = $('.catalog__content-block.black .catalog__content-block__info .images .slider'),
      whitePhone = $('.catalog__content-block.white .catalog__content-block__info .images .slider'),
      silverPhone = $('.catalog__content-block.silver .catalog__content-block__info .images .slider'),
      catalogSlider = [bluePhone, blackPhone, whitePhone, silverPhone];

  for (var _i2 = 0; _i2 < catalogSlider.length; _i2++) {
    catalogSlider[_i2].slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);
  }
  /*
      review slider
   */


  $('.review .slider').slick(sliderSettings, sliderSettings.dots = false, sliderSettings.arrow = true, sliderSettings.prevArrow = $('.prev-arrow'), sliderSettings.nextArrow = $('.next-arrow')); // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};