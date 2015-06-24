
$(function(){
    $(".floor").click(
        function(event){
	        if($(event.target).hasClass("class")){
		        $(event.target).css("transform", "rotateY(360deg)");
            $(event.target).text("TEST");

		        return;
	        }
          $(this).find(".floornum").toggleClass("hide_floornum");
          $(this).siblings().find(".floornum").removeClass("hide_floornum");
          $(this).toggleClass("zoom");
          $(this).siblings().removeClass("zoom");
        });
    $(window).scroll(function(){
        $(".class").css("color", "blue");

    });
});
