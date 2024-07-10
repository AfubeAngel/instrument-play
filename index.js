const numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick () {
    this.style.color="white";
    const drumButton = this.innerHTML;
    makeSound(drumButton);
    addAnimation(drumButton);
}

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    addAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
        let audio1 = new Audio("sounds/crash.mp3");
        audio1.play();
            break;
        case "a":
        let audio2 = new Audio("sounds/kick-bass.mp3");
        audio2.play();
            break;
        case "s":
        let audio3 = new Audio("sounds/snare.mp3");
        audio3.play();
            break;
        case "d":
        let audio4 = new Audio("sounds/crash.mp3");
        audio4.play();
            break;
        case "j":
        let audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
            break;
        case "k":
        let audio6 = new Audio("sounds/snare.mp3");
        audio6.play();
            break;
        case "l":
        let audio7 = new Audio("sounds/snare.mp3");
        audio7.play();
            break;
    
        default:
            break;
    }
}

function addAnimation(currentKey) {
    const activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){activeKey.classList.remove("pressed");},1000);
}