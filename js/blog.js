$('.blog_card_slide').slick({
    dots: true,
    infinite: false,
    speed: 800,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.blog_prev_btn'),
    nextArrow: $('.blog_next_btn'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});