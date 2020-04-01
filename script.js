const play = document.querySelector(".play");
const video = document.querySelector(".video");
const volumUp = document.querySelector(".volumUp");
const volumDown = document.querySelector(".volumDown");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

volumUp.addEventListener("click", () => {
  if (video.volume + 10 >= 1) {
    video.volume = 1;
  } else {
    video.volume += 10;
  }
});

volumDown.addEventListener("click", () => {
  if (video.volume - 10 <= 0) {
    video.volume = 0;
  } else {
    video.volume -= 10;
  }
});

back.addEventListener("click", () => {
  video.currentTime -= 10;
});

forward.addEventListener("click", () => {
  video.currentTime += 10;
});
