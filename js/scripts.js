$('.owl-carousel').owlCarousel({
    

    loop:true,
    margin:10,
    nav:true,
    dots:true,
    Default: true,
    autoplay:true,
    Default:1000,
    autoplayHoverPause:true,
    responsive:{

        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
