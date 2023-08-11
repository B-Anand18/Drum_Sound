var numberDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberDrum; i++) {
  var drumElement = document.querySelectorAll(".drum")[i];

  drumElement.addEventListener("click", function() {
    playSoundAndAnimate(this.innerHTML);
  });

  drumElement.addEventListener("keydown", function(event) {
    playSoundAndAnimate(event.key);
  });
}

function playSoundAndAnimate(key) {
  var audio;
  var buttonElement = document.querySelector("." + key);

  switch (key) {
    case "w":
      audio = new Audio('sounds/crash.mp3');
      break;
    case "a":
      audio = new Audio('sounds/kick-bass.mp3');
      break;
    case "s":
      audio = new Audio('sounds/snare.mp3');
      break;
    case "d":
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case "j":
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case "k":
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case "l":
      audio = new Audio('sounds/tom-4.mp3');
      break;
    default:
      audio = new Audio('sounds/wrong.mp3');
  }

  audio.play();
  addPressedClass(buttonElement);

  setTimeout(function() {
    removePressedClass(buttonElement);
  }, 100);
}

function addPressedClass(element) {
  element.classList.add("pressed");
}

function removePressedClass(element) {
  element.classList.remove("pressed");
}
