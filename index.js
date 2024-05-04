let numberOfDrumButtons = document.querySelectorAll(".drum").length ;
console.log('drums',document.querySelectorAll(".drum"));

 function playTheMusic (key){
    let audioUrl="";
        switch(key){
            case 'w':{ audioUrl="./sounds/tom-2.mp3"; break;}
            case 'a':{ audioUrl="./sounds/kick-bass.mp3"; break;}
            case 's':{ audioUrl="./sounds/snare.mp3"; break;}
            case 'd':{ audioUrl="./sounds/tom-1.mp3"; break;}
            case 'j':{ audioUrl="./sounds/crash.mp3"; break;}
            case 'k':{ audioUrl="./sounds/tom-3.mp3"; break;}
            case 'l':{ audioUrl="./sounds/tom-4.mp3"; break;}
        
        }
        let audio = new Audio(audioUrl);
        audio.play();

 }
// for clicks
 for (let i = 0 ; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(e){
    //      let audioUrl="./sounds/tom-1.mp3";
    //     switch(e.target.innerHTML){
    //         case 'w':{ audioUrl="./sounds/tom-2.mp3"; break;}
    //         case 'a':{ audioUrl="./sounds/kick-bass.mp3"; break;}
    //         case 's':{ audioUrl="./sounds/snare.mp3"; break;}
    //         case 'd':{ audioUrl="./sounds/tom-1.mp3"; break;}
    //         case 'j':{ audioUrl="./sounds/crash.mp3"; break;}
    //         case 'k':{ audioUrl="./sounds/tom-3.mp3"; break;}
    //         case 'l':{ audioUrl="./sounds/tom-4.mp3"; break;}
        
    //     }
    //     let audio = new Audio(audioUrl);
    //     audio.play();
    // });

    playTheMusic(e.target.innerHTML);
    buttonAnimation(e.target.innerHTML);
    
 });
}

 //for keys
document.addEventListener('keydown',function(e){
    playTheMusic(e.key);
    buttonAnimation(e.key);
    // let audioUrl="./sounds/tom-1.mp3";
    // switch(e.key){
    //     case 'w':{ audioUrl="./sounds/tom-2.mp3"; break;}
    //     case 'a':{ audioUrl="./sounds/kick-bass.mp3"; break;}
    //     case 's':{ audioUrl="./sounds/snare.mp3"; break;}
    //     case 'd':{ audioUrl="./sounds/tom-1.mp3"; break;}
    //     case 'j':{ audioUrl="./sounds/crash.mp3"; break;}
    //     case 'k':{ audioUrl="./sounds/tom-3.mp3"; break;}
    //     case 'l':{ audioUrl="./sounds/tom-4.mp3"; break;}
    
    // }
    // let audio = new Audio(audioUrl);
    // audio.play();
});

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100 );

}