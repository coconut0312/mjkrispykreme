window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });




    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        if(scrollTop >= 820){

            $('.fix_elem').css('transform', `translateY(-${(-82) + scrollTop * 0.2}px)`);

        }

    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {




        $("#sc01_slider").slick({
            dots: true, //navigation
            arrows: true, //arrow
            prevArrow: $('#section01 .prev'), //prev
            nextArrow: $('#section01 .next'), //next
            autoplay:true, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover:false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 1300, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable:true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide:0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
            variableWidth: false,

        });



        $("#section04 .image").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('#section04 .prev'), //prev
            nextArrow: $('#section04 .next'), //next
            autoplay:true, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover:false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 1300, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable:true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide:0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
            variableWidth: false,

        }) .on('beforeChange', function(event, slick, currentSlide, nextSlide){

            $('.progress').removeClass('on')

        }).on('afterChange', function(event, slick, currentSlide, nextSlide){


            $('.progress').addClass('on')

        });



        $("#storelist").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('#section05 .store_button02'), //prev
            nextArrow: $('#section05 .store_button01'), //next
            autoplay:true, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover:false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 2000, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable:true,
            vertical: true, // vertical slider
            verticalSwiping: true, // vertical swiper
            initialSlide:0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
            variableWidth: false,

        });


        $('#header .bottom .gnb > li').mouseenter(function () {

            $('#header .bottom .gnb > li').removeClass('on');
            $(this).addClass('on');
        });



        $('#mega .gnb_text > ul').mouseenter(function () {

            $('#header .bottom .gnb > li').removeClass('on');


            if($(this).hasClass('menu_gnb')){
                $('#header .bottom .gnb > li:nth-child(1)').addClass('on');


            }else if($(this).hasClass('store_gnb')){
                $('#header .bottom .gnb > li:nth-child(2)').addClass('on');
            }
            else
            if($(this).hasClass('homeservice_gnb')){
                $('#header .bottom .gnb > li:nth-child(3)').addClass('on');
            }else
            if($(this).hasClass('event_gnb')){
                $('#header .bottom .gnb > li:nth-child(4)').addClass('on');
            }else
            if($(this).hasClass('brand_gnb')){
                $('#header .bottom .gnb > li:nth-child(5)').addClass('on');
            }else
            if($(this).hasClass('survey_gnb')){
                $('#header .bottom .gnb > li:nth-child(6)').addClass('on');
            }
        });


        $('#header').mouseleave(function () {

            $('#header .bottom .gnb > li').removeClass('on');
        });



        /*

                gsap.to(".box2", {
                    x: 400,
                    scrollTrigger: {
                        trigger: ".box2",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: false,
                        id: "scrub"
                    }
                });

                gsap.to(".box3", {
                    x: 400,
                    rotation: 360,
                    scrollTrigger: {
                        trigger: ".box3",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: true,
                        id: "scrub"
                    }
                });*/

    })();




})






    $("#snsimage").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .snsbutton_prev'), //prev
        nextArrow: $('#section06 .snsbutton_next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1300, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 4, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    });

