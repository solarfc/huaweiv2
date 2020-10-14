let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {

    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('html').style.overflowY = 'scroll';
    }, 1000);

    /*
        animate
     */

    let fade = [
        $('a.bucket'), $('.about__content figure'),
        $('.description__content-top h3'), $('.description__content-top p'),
        $('.description__content-center img'),
        $('.description__content-bottom h3'), $('.description__content-bottom p'),
        $('.camera__content-video'),
        $('.camera__content-text h3'), $('.camera__content-text p'),
        $('.gallery__content a'),
        $('.catalog h3'), $('.catalog span.title'),
        $('.catalog__content-block.blue'), $('.catalog__content-block.black'),
        $('.catalog__content-block.white'), $('.catalog__content-block.silver'),
        $('.photo__content a'),
        $('.advantages__content-block'),
        $('.information h3'),
        $('.review'),
        $('.delivery__content figure')

    ];

    for(let i = 0; i < fade.length; i++) {
        fade[i].waypoint(
            function (direction) {
                if(direction === 'down') {
                    $(this.element).addClass('animated');
                    this.destroy();
                }
            },
            {
                offset: function () {
                    return this.context.innerHeight() * 0.82;
                }
            }
        );
    }


    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('span output');

    tomorrow.setDate(today.getDate() + i);
    day = (tomorrow.getDate() > 9) ? tomorrow.getDate() : `0${tomorrow.getDate()}`;
    month = (tomorrow.getMonth() + 1 > 9) ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear().toString().slice(2);

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year}`;
    }

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

    const bluePhone = $('.catalog__content-block.blue .catalog__content-block__info .images .slider'),
        blackPhone = $('.catalog__content-block.black .catalog__content-block__info .images .slider'),
        whitePhone = $('.catalog__content-block.white .catalog__content-block__info .images .slider'),
        silverPhone = $('.catalog__content-block.silver .catalog__content-block__info .images .slider'),
        catalogSlider = [bluePhone, blackPhone, whitePhone, silverPhone];

    for(let i = 0; i < catalogSlider.length; i++) {
        catalogSlider[i].slick(sliderSettings, sliderSettings.dots = true, sliderSettings.arrow = false);
    }

    /*
        review slider
     */

    $('.review .slider').slick(sliderSettings, sliderSettings.dots = false, sliderSettings.arrow = true, sliderSettings.prevArrow = $('.prev-arrow'), sliderSettings.nextArrow = $('.next-arrow'));

    /*
        hide bucket
     */

    const toggleBucket = () => {
        let bucket = document.querySelector('a.bucket'),
            topOfWindow = window.pageYOffset + innerHeight,
            aboutTopPosition = document.querySelector('.about').offsetTop,
            catalogTopPosition = document.querySelector('.catalog').offsetTop,
            photoTopPosition = document.querySelector('.photo').offsetTop,
            footerTopPosition = document.querySelector('.footer').offsetTop;

        if(topOfWindow < aboutTopPosition && topOfWindow > footerTopPosition) {
            bucket.classList.remove('animated');
            bucket.style.zIndex = '-5';
        } else if (topOfWindow > catalogTopPosition && topOfWindow < photoTopPosition) {
            bucket.classList.remove('animated');
            bucket.style.zIndex = '-5';
        } else {
            bucket.classList.add('animated');
            bucket.style.zIndex = '15';
        }
    };

    /*
        slow scroll
     */

    const slowScroll = (href) => {
        $('a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
            return false;
        });
    }

    /*
        change href on mobile
     */

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)){
        let href = $('#mobile-order').offset().top - innerHeight;

        slowScroll(href);

        window.addEventListener('scroll', function () {
            toggleBucket();
        });

        window.addEventListener('resize', function () {
            toggleBucket();
        });
    } else {
        let href = document.getElementById('catalog').offsetTop;

        slowScroll(href);
    }
};
