let buttons = document.querySelectorAll(".drum");

const sounds = {
  a: "Sounds/tom-1.mp3",
  h: "Sounds/guitar-strum.wav",
  k: "Sounds/vocal.wav",
  q: "Sounds/snare.mp3",
  y: "Sounds/xylophone.wav",
  u: "Sounds/tom-light.wav",
  g: "Sounds/chord-B.wav",
  d: "Sounds/Chord-C2.wav",
  w: "Sounds/tom-2.mp3",
  s: "Sounds/tom-3.mp3",
  v: "Sounds/guitar-strum.wav",
  m: "Sounds/kick-bass.mp3",
  o: "Sounds/vocal.wav",
  b: "Sounds/snare.mp3",
  z: "Sounds/xylophone.wav",
  c: "Sounds/crash.mp3"
};


buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let key = this.innerHTML[0]; 
    playSound(key);
    makeAnimation(key);
  });
});


document.addEventListener("keydown", function (event) {
  playSound(event.key);
  makeAnimation(event.key);
});


function playSound(key) {
  if (sounds[key]) {
    let audio = new Audio(sounds[key]);
    audio.play();
  }
}


function makeAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);

  if (activeButton) { 
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
