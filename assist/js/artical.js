//owl coursloe
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:500,
    margin:30,
    responsiveClass:true,
    rtl:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false,
            margin:30,
        },
        1000:{
            items:3,
            nav:true,
            loop:false,
            margin:30,
            
        }
    }
});