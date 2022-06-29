//detecting key press and calling makeSound();
document.addEventListener('keydown', (event) => {
    makeSound(event.key)
    console.log(event.key);
    buttonAnimation(event.key)

});

//returns how many drums are there
//alert(numOfDrums);
var numOfDrums = document.querySelectorAll(".drum").length;

//adding event listenenrs to all the button drums using for loop

for (var i = 0; i <= numOfDrums; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML; //detecting button press 
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)

    });
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l' :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

    }
}
function buttonAnimation(key) {
    var clickedBtn = document.querySelector("." + key);
    clickedBtn.classList.add('pressed');

    //adding timeout
    setTimeout(function () {
        clickedBtn.classList.remove('pressed');
    }, 100);//1000=1sec
}

//playing audio
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


//how to get event values
/*
document.addEventListener('keydown', (event)=> {    
    console.log(event); // all event related info
    console.log(event.type);
    console.log(event.key);
    console.log(event.code);
}); 
*/