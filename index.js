var drums = document.getElementsByClassName("drum");

for (var i = 0; i < drums.length; i++) {
  var drum = drums[i];
  drum.addEventListener("click", (e) => {
    var key = e.target.innerText;
    playSound(key);
    animate(key);
  });
}

document.addEventListener("keydown", (e) => {
  var key = e.key;
  playSound(key);
  animate(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function animate(key) {
  var button = document.getElementsByClassName(key)[0];
  button.classList.add("pressed");

  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}
