var btn=document.querySelectorAll(".drum").length;
for(var i=0;i<btn;i++){ 
document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
function clicked(){
    var buttonInnerHTML= this.innerHTML;
    originalsound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
}
function originalsound(key){
    switch(key)
    {
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
                var tom2= new Audio('sounds/buzz.mp3');
                tom2.play();
                break;
        case "s":
                    var tom3= new Audio('sounds/crock.mp3');
                    tom3.play();
                    break;
        case "d":
                   var tom1= new Audio('sounds/kick-bass.mp3');
                    tom1.play();
                    break;
        case "j":
                   var snare= new Audio('sounds/pin.mp3');
                    snare.play();
                    break;
        case "k":
                  var tom4= new Audio('sounds/snare.mp3');
                    tom4.play();
                    break;
        case "l":
                    var kick= new Audio('sounds/buzzer.mp3');
                    kick.play();
                    break;
                    default: console.log(buttonInnerHTML);
    
    }
}
function buttonAnimation(currentKey){
var activekey=document.querySelector("."+currentKey)
activekey.classList.add("pressed");
setTimeout(function(){
    activekey.classList.remove("pressed");
},100);
}