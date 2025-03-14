var AllDrums = $(".drum");
console.log(AllDrums);

$(".drum").click(function(){
    AudioPlayer(this.innerHTML);
    $(this).addClass("pressed");

    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 150);

});

$(".drum").keydown(function (event) { 
    AudioPlayer(event.key);

    let buttonPressed = $("." + event.key);
    $(buttonPressed).addClass("pressed");
    setTimeout(() => {
        $(buttonPressed).removeClass("pressed");
    }, 150);
});

function AudioPlayer(key){

    let audio = new Audio(
        (key == "w") ? "sounds/crash.mp3" : 
        (key == "a") ? "sounds/kick-bass.mp3" :
        (key == "s") ? "sounds/snare.mp3" :
        (key == "d") ? "sounds/tom-1.mp3" :
        (key == "j") ? "sounds/tom-2.mp3" :
        (key == "k") ? "sounds/tom-3.mp3" :
        (key == "l") ? "sounds/tom-4.mp3" :
        ""
    );
    audio.play();
}