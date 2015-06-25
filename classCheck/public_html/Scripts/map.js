$(function(){
    $(".floor").click(
        function(event){
          var classroom = $(event.target);
	           if(classroom.hasClass("class") && !classroom.hasClass("activated")){
                    addActivated(classroom);
                    return;
	           }else if (classroom.hasClass("activated")) {
	             removeActivated(classroom);
                  return;
	           }
                toggleZoom(this);
                resetClassRoom();
        });
      $(window).scroll(function(){
        $(".class").css("color", "blue");
    });
});

var addActivated = function(classroom){
      classroom.addClass("activated");
      classroom.css("transform", "rotateY(360deg)");
      classroom.text("TEST");
      
}

var removeActivated = function(classroom){
      classroom.removeClass("activated");
      classroom.css("transform", "rotateY(0deg)");
      classroom.text(classroom.attr('id'));
     
}

var toggleZoom = function(elem){
      $(elem).find(".floornum").toggleClass("hide_floornum");
      $(elem).siblings().find(".floornum").removeClass("hide_floornum");
      $(elem).toggleClass("zoom");
      $(elem).siblings().removeClass("zoom");
}

var resetClassRoom = function(){
    $(".activated").each(function(index,elem){
                      $(elem).removeClass("activated");
                      $(elem).text($(elem).attr('id'));
     
      });
}