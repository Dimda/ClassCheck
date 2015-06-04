
$(function(){
    $(".floor").click(
        function(){
            $(this).find(".floornum").toggleClass("hide_floornum");
            $(this).siblings().find(".floornum").removeClass("hide_floornum");
            $(this).toggleClass("zoom");
            $(this).siblings().removeClass("zoom");
        });
    $(window).scroll(function(){
        $(".class").css("color", "blue");
    });   
});


