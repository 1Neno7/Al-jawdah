/* ========== preloder start ========== */
var preloader = document.querySelector(".preloader");
var body = document.getElementById("body");
window.addEventListener("load", vanish);
function vanish() {
  preloader.classList.add("disappear");
  body.classList.remove("loading");
}
/* ========== preloder end ========== */

/* ========== buttons click start ========== */
var buttons = document.querySelectorAll(".connect, .backb, .logoimg");
var buttonsLink = document.querySelectorAll(".connect a, .backb a, .logoimg a");
var buttonsLength = buttons.length;
var buttonsLinkLength = buttonsLink.length;
for (let i = 0; i < buttonsLength; i++) {
  buttons[i].addEventListener("click", () => {
    buttonsLink[i].click();
  });
}
/* ========== buttons click end ========== */

/* ========== Al-jawdah button start ========== */
var logoimg = document.querySelector(".logoimg");
if (innerHeight / 2.777 >= innerWidth) {
  logoimg.style.position = "relative";
}
window.addEventListener("resize", () => {
  if (innerHeight / 2.777 >= innerWidth) {
    logoimg.style.position = "relative";
  } else {
    logoimg.style.position = "absolute";
  }
});
/* ========== Al-jawdah button end ========== */

/* ========== video size start ========== */
var video = document.getElementById("nftbvideo");
if (innerHeight / 1.282 + innerHeight >= innerWidth) {
  video.style.width = "100vmax";
  video.style.height = "auto";
}
window.addEventListener("resize", () => {
  if (innerHeight / 1.282 + innerHeight >= innerWidth) {
    video.style.width = "100vmax";
    video.style.height = "auto";
  } else {
    video.style.width = "auto";
    video.style.height = "100vmin";
  }
});
/* ========== video size end ========== */

/* ========== video autoplay on lowBowerMode start ========== */
body.addEventListener("touchstart", () => {
  const videoElement = document.querySelector(".nftbvideo");
  if (videoElement.playing) {
    // video is already playing so do nothing
  } else {
    // video is not playing
    // so play video now
    videoElement.play();
  }
});
/* ========== video autoplay on lowBowerMode end ========== */
