var numberOfDrumButtons = document.querySelectorAll(".drum").length ;

 for (var i = 0 ; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var audio = new Audio("sounds/ton-1.mp3");
        audio.play();
    });
    
 }



