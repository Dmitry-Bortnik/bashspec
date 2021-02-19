$('[type="checkbox"]').on('click', function() {

    var $this = $(this);

    $($this).closest('label').toggleClass('active');

});

$('.js-video').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var popup = $('.awg-popup');
    var video = $(this).data('video');
    var iframe = '<iframe src="https://www.youtube.com/embed/' + video + '?rel=0&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var videoBlock = $('.awg-popup').find('.awg-popup__video');
    videoBlock.html(iframe);
    popup.fadeIn();
  });

$('.js-close-popup').click(function(){
    var popup = $('.awg-popup');
    var videoBlock = $('.awg-popup').find('.awg-popup__video');
    popup.fadeOut();
    videoBlock.empty();
});

$('.second-menu-close').click(function(){
    var secondMenu = $('.second-menu');
    secondMenu.removeClass('open');
});

$('.header__toggler').click(function(){
    $('.second-menu').addClass('open');
})




  function windowSize(){
    if ($(window).width() <= '768'){
  
      $('.w-gallery__list').slick({
        slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows:false
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 1.2,
                infinite: false,
                slidesToScroll: 1
              }
            }
          ]
        });

        $('.serts').slick({
          slidesToShow: 4,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false,
                  arrows:false
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 430,
                settings: {
                  slidesToShow: 1.2,
                  infinite: false,
                  slidesToScroll: 1
                }
              }
            ]
          });
    } 
}

$(window).on('load resize',windowSize);