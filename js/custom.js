$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });
});

$(function () {
    const main_brand_slide = new Swiper('.main_brand_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,/*겹치는 슬라이드이다. wiper-parallax="300" html에 적어줘야됨*/
        speed: 1000,/*옮기는거1초*/
        autoplay: {
            delay: 3000, // 3초마다 자동 전환
            disableOnInteraction: false, // 유저가 터치/클릭해도 자동 재생 유지
        },
    });/*슬라이드 돌아감, 베껴쓰면된다.*/

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });
    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });
})