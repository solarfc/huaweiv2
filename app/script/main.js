let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    /*
        loop fancybox
     */

    $.fancybox.defaults.loop = true;

    /*
        slider settings
     */

    const sliderSettings = {
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: '',
        arrow: '',
        prevArrow: '',
        nextArrow: ''
    };

    $('.catalog__content-block.blue .catalog__content-block__info .images .slider').slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);
    $('.catalog__content-block.black .catalog__content-block__info .images .slider').slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);
    $('.catalog__content-block.white .catalog__content-block__info .images .slider').slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);
    $('.catalog__content-block.silver .catalog__content-block__info .images .slider').slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);

    /*
        review slider
     */

    $('.review .slider').slick(sliderSettings, sliderSettings.dots = false, sliderSettings.arrow = true, sliderSettings.prevArrow = $('.prev-arrow'), sliderSettings.nextArrow = $('.next-arrow'));
    // /*
    //     change href on mobile
    //  */
    //
    // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
    //     document.querySelector('a.grande').href = '#formgrande';
    //     document.querySelector('a.lake').href = '#formlake';
    //     document.querySelector('a.lou').href = '#formlou';
    // }
};
