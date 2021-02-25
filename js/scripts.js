$('[type="radio"]').on('click', function() {
    var $this = $(this);
    $($this).parent().siblings('label').removeClass('active');
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


$(function () {
    $('input[name="phone"]').mask("9 (999) 999-9999");
  });


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


$(document).ready(function () {
    $("#free-form").submit(function () {
      $("#free-form button").prop("disabled", true).css({
        "background-color": "#b6b6b6",
        "color": "#FFF"
      }).text("Ждите...");
      $.ajax({
        type: "POST",
        url: "/send.php",
        data: $(this).serialize()
      }).done(function () {
        // yaCounter53745795.reachGoal('ORDER2');
        $('#free-form').html("<div style='font-size:24px; text-align:center; width: 100%; color:#000;'>Спасибо! Мы свяжемся с вами для вручения бесплатного образца");
      });
      return false;
    });
    $("#contact-form").submit(function () {
        $("#contact-form button").prop("disabled", true).css({
          "background-color": "#b6b6b6",
          "color": "#FFF"
        }).text("Ждите...");
        $.ajax({
          type: "POST",
          url: "/send.php",
          data: $(this).serialize()
        }).done(function () {
          // yaCounter53745795.reachGoal('ORDER2');
          $('#contact-form').html("<div style='font-size:24px;  margin-top:10px; color:#fff;'>Спасибо!<br> Мы свяжемся с вами для передачи коммерческого предложения");
        });
        return false;
      });
      $("#kwiz").submit(function () {
        $("#kwiz button").prop("disabled", true).css({
          "background-color": "#b6b6b6",
          "color": "#FFF"
        }).text("Ждите...");
        $.ajax({
          type: "POST",
          url: "/send-kwiz.php",
          data: $(this).serialize()
        }).done(function () {
          // yaCounter53745795.reachGoal('ORDER2');
          $('#kwiz').html("<div style='font-size:24px;  margin-top:10px; color:#000;'>Спасибо!<br> Мы свяжемся с вами для просчёта в течении 15 минут");
        });
        return false;
      });
})

var i = 0;
$('.btn.btn-kwiz-next').on('click', function() {
  i++;
    $('.kwiz-step.active').removeClass('active').next().addClass('active');
    if (i == 4) {
      $('.btn.btn-kwiz-next.btn-step-1').hide();
    }
});