$(function(){
    var owl = $('#carousel-1');

    owl.owlCarousel({
        items:1,
        autoHeight:true
    });

    $('.right-arrow-carousel').click(function() {
        owl.trigger('next.owl.carousel',[500]);
    })
    $('.left-arrow-carousel').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })
    $('.carousel-1').click(function() {
        owl.trigger('to.owl.carousel', [0, 500]);
    })
    $('.carousel-2').click(function() {
        owl.trigger('to.owl.carousel', [1, 500]);
    })
    $('.carousel-3').click(function() {
        owl.trigger('to.owl.carousel', [2, 500]);
    })


    var owl2 = $('#carousel-2');
    owl2.owlCarousel({
        items:1,
        margin: 10
    });
    $('.cite1').click(function() {
        owl2.trigger('to.owl.carousel', [0, 500]);
    })
    $('.cite2').click(function() {
        owl2.trigger('to.owl.carousel', [1, 500]);
    })
    $('.cite3').click(function() {
        owl2.trigger('to.owl.carousel', [2, 500]);
    })
});