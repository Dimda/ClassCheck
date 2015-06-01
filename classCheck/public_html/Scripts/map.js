
$(function(){
    $(".floor").click(
        function(){
            $(this).find(".floornum").toggleClass("hide_floornum");
            $(this).siblings().find(".floornum").removeClass("hide_floornum");
            $(this).toggleClass("zoom");
            $(this).siblings().removeClass("zoom");
            /*$(this).find(".class").css(
                {
                    'word-wrap' : 'break-word',
                    'letter-spacing' : '300px'
                });*/
        });
});


