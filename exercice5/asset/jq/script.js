
$(function(){  
    
    $("#green, #blue, #red").mouseout(function(){
        $("#text").css("color", "#000000");
        })
    $("#green").mouseover(function(){ 
        $("#text").css("color", "#708D23");
        })
    $("#red").mouseover(function(){
        $("#text").css("color", "#FF0000");
        })
    $("#blue").mouseover(function(){
        $("#text").css("color", "#0000FF");
        })
   
});

