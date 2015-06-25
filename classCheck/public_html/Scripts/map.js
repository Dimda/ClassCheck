$(function(){
    $(".floor").click(
        function(event){
          var classroom = $(event.target);
	           if(classroom.hasClass("class") && !classroom.hasClass("activated")){
                  classroom.addClass("activated");
  		        classroom.css("transform", "rotateY(360deg)");
                  classroom.text("TEST");
  		        return;
	           }else if (classroom.hasClass("activated")) {
	             classroom.removeClass("activated");
                  classroom.css("transform", "rotateY(0deg)");
                  classroom.text(classroom.attr('id'));
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
