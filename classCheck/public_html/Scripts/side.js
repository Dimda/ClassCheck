$(function () {
      var $body = $('body');
      $('#js__sideMenuBtn').on('click', function () {
        $body.toggleClass('side-open');
        $('#js__overlay').on('click', function () {
          $body.removeClass('side-open');
        });
      });
    });
    $(function(){
        $(".setting").click(function(){
            $(".result").text($(".day:checked").val());
        });
    });
