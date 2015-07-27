$(function(){

  var classrooms = {};
  initClassrooms(classrooms);

  classrooms["8-A"].availability = false;
  classrooms["8-A"].purpose = "プレゼンテーション技法";
  classrooms["8-A"].user = "新井";

  checkClassrooms(classrooms);

  $(".floor").click(
      function(event){
        var target = $(event.target);
	          if(target.hasClass("class") && !target.hasClass("activated")){
              addActivated(target, classrooms);
              return;
	          }else if (target.hasClass("activated")) {
	            removeActivated(target);
              return;
	          }
              toggleZoom(this);
              resetClassRoom();
  });
});

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

var initClassrooms = function(classrooms){
  for(i = 2; i <= 8; i++){
    var char = 'A';
    for(j = 0; j < 4; j++){
      classrooms[i + "-" + char] = {};
      classrooms[i + "-" + char].availability = true;
      char = nextChar(char);
    }

    classrooms["9-D1"] = {}; classrooms["9-D1"].availability = true;
    classrooms["9-D2"] = {}; classrooms["9-D2"].availability = true;
  }
  return classrooms;
}

function checkClassrooms(classrooms){
  for(i = 2; i <= 8; i++){
    var char = 'A';
    for(j = 0; j < 4; j++){
      if(classrooms[i + "-" + char].availability == false){
        $("#" + i + "-" + char).addClass("unavailable");
      }
      char = nextChar(char);
    }
  }
  classrooms["9-D1"].availability == false ? $("#9-D1").addClass("unavailable") : null;
  classrooms["9-D2"].availability == false ? $("#9-D2").addClass("unavailable") : null;
}

var addActivated = function(target, classrooms){
      var id = target.attr('id');
      target.addClass("activated");
      target.css({"transform" : "rotateY(360deg)"});

      if(classrooms[id].availability == false){
        target.css({
          "font-size" : "4vmin",
          "padding" : "0 0 6vmin 0"
        });
        target.text(classrooms[id]["purpose"] + '\n' + classrooms[id]["user"]);
      }else{
        target.text("予約");
      }
}

var removeActivated = function(target){
      target.removeClass("activated");
      target.css({
        "transform" : "rotateY(0deg)",
        "padding" : "6vmin 0 0 0",
        "font-size" : "6vmin"
      });
      target.text(target.attr('id'));

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
