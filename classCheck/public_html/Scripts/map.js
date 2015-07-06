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
});

var obj = {"8-A":{"purpose":"プレゼンテーション技法","user":"新井"}};



var addActivated = function(classroom){
      var id = classroom.attr('id');
      classroom.addClass("activated");
      classroom.css({
        "transform" : "rotateY(360deg)",
        "padding" : "0 0 6vmin 0",
        "font-size" : "4vmin"
      });
      classroom.text(obj[id]["purpose"] + '\n' + obj[id]["user"]);

}

var removeActivated = function(classroom){
      classroom.removeClass("activated");
      classroom.css({
        "transform" : "rotateY(0deg)",
        "padding" : "6vmin 0 0 0",
        "font-size" : "6vmin"
      });
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
