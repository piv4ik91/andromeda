

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 5,
    
});
$('.slider__btn-left').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider__btn-pravo').click(function() {

    owl.trigger('prev.owl.carousel', );
})
