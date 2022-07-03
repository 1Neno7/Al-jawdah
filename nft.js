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
var buttons = document.querySelectorAll(".connect, .backb, #nftlogoimg");
var buttonsLink = document.querySelectorAll(
  ".connect a, .backb a, #nftlogoimg a"
);
var buttonsLength = buttons.length;
var buttonsLinkLength = buttonsLink.length;
for (let i = 0; i < buttonsLength; i++) {
  buttons[i].addEventListener("click", () => {
    buttonsLink[i].click();
    console.log(buttonsLink[i]);
    buttonsLink[i].addEventListener("click", () => {
      console.log("clicked");
    });
  });
}
/* ========== buttons click end ========== */

/* ========== Al-jawdah button start ========== */
var nftlogoimg = document.getElementById("nftlogoimg");
if (innerHeight / 2.777 >= innerWidth) {
  nftlogoimg.style.position = "relative";
}
window.addEventListener("resize", () => {
  if (innerHeight / 2.777 >= innerWidth) {
    nftlogoimg.style.position = "relative";
  } else {
    nftlogoimg.style.position = "absolute";
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