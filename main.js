/* ========== Menu toggle start ========== */
var menuB = document.querySelector(".toggle");
var Mmenu = document.querySelector(".mobilemenu");
var menuO = false;
[menuB, Mmenu].forEach((element) => {
  element.addEventListener("click", () => {
    if (!menuO) {
      menuB.classList.add("open");
      Mmenu.classList.add("open");
      menuO = true;
    } else {
      menuB.classList.remove("open");
      Mmenu.classList.remove("open");
      menuO = false;
      window.removeEventListener("scroll", checkScroll);
      setTimeout(() => {
        window.addEventListener("scroll", checkScroll);
      }, 1000);
    }
  });
});
/* ========== Menu toggle end ========== */

/* ========== header hide start ========== */
var doc = document.documentElement;
var w = window;
var curScroll = (prevScroll = w.scrollY || doc.scrollTop);
var curDirection = (prevDirection = 0);
var header = document.getElementById("navbar");
var threshold = 200;
var toggled;
var checkScroll = function () {
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    //scroll down
    curDirection = 2;
  } else {
    //scroll up
    curDirection = 1;
  }
  if (curDirection !== prevDirection) {
    toggled = toggleHeader();
  }
  if (toggled) {
    prevDirection = curDirection;
  }
  prevScroll = curScroll;
};
var toggleHeader = function () {
  toggled = true;
  if (curDirection === 2 && curScroll > threshold) {
    header.classList.add("hide");
  } else if (curDirection === 1) {
    header.classList.remove("hide");
  } else {
    toggled = false;
  }
  return toggled;
};
/* ========== header hide end ========== */

/* ========== variables start ========== */
var pages = document.querySelector(".pages");
var nav = document.getElementById("navbar");
var toggle = document.querySelector(".toggle");
var overlay = document.querySelector(".overlay");
var h = window.innerHeight;
var w = window.innerWidth;
var cglass = document.querySelectorAll(".cglass");
var cglasslength = cglass.length;
var logos = document.querySelector(".logos");
var text = document.querySelectorAll(".text");
var textlength = text.length;
var a = document.querySelectorAll(".pagesl a");
var alength = a.length;
var logoimg = document.querySelector(".logoimg");
var texth2 = document.querySelectorAll(".text h2");
var texth2length = texth2.length;
var texth3 = document.querySelectorAll(".text h3");
var texth3length = texth3.length;
var textp = document.querySelectorAll(".text p");
var textplength = textp.length;
var but = document.querySelectorAll(".learnmore");
var butlength = but.length;
var cdiv = document.querySelectorAll(".cdiv");
var cdivlength = cdiv.length;
var nfth3 = document.getElementById("nfth3");
var nfth2 = document.getElementById("nfth2");
var graphich2 = document.getElementById("graphich2");
var graphicp = document.getElementById("graphicp");
var nftvideo = document.getElementById("nftvideo");
var developmenth3 = document.getElementById("developmenth3");
var developmentvideo = document.getElementById("developmentvideo");
var developmenth2 = document.getElementById("developmenth2");
var developmentdiv = document.getElementById("developmentdiv");
var aboutush2 = document.getElementById("aboutush2");
var aboutusdiv = document.getElementById("aboutusdiv");
var aboutush3 = document.getElementById("aboutush3");
var sections = document.querySelectorAll(".content section");
var navli = document.querySelectorAll(".pagesl a");
var Mnavli = document.querySelectorAll(".MM a");
var muchmoreh2 = document.querySelector(".muchmoreh2");
var content = document.querySelector(".content");
var prlogos = document.getElementById("logos");
var cvideo = document.querySelector(".cvideo");
/* ========== variables end ========== */

/* ========== navbar hightlight start ========== */
function activemenu() {
  let sectionslength = sections.length;
  while (
    --sectionslength &&
    window.scrollY + window.innerHeight / 1.7 <
      sections[sectionslength].offsetTop
  ) {}
  navli.forEach((ltx) => ltx.classList.remove("active"));
  Mnavli.forEach((ltx) => ltx.classList.remove("active"));
  navli[sectionslength].classList.add("active");
  Mnavli[sectionslength].classList.add("active");
}
activemenu();
window.addEventListener("scroll", activemenu);
/* ========== navbar hightlight end ========== */

/* ========== scroll to section start ========== */
var tfire;
function scrolltosection() {
  if (sections[0].offsetTop + innerHeight / 4 > window.scrollY) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 0;
  } else if (
    sections[0].offsetTop + innerHeight / 1.33 < window.scrollY &&
    sections[1].offsetTop + innerHeight / 4 > window.scrollY
  ) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 1;
  } else if (
    sections[1].offsetTop + innerHeight / 1.33 < window.scrollY &&
    sections[2].offsetTop + innerHeight / 4 > window.scrollY
  ) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 2;
  } else if (
    sections[2].offsetTop + innerHeight / 1.33 < window.scrollY &&
    sections[3].offsetTop + innerHeight / 4 > window.scrollY
  ) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 3;
  } else if (
    sections[3].offsetTop + innerHeight / 1.33 < window.scrollY &&
    sections[4].offsetTop + innerHeight / 4 > window.scrollY
  ) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 4;
  } else if (sections[4].offsetTop + innerHeight / 1.33 < window.scrollY) {
    window.removeEventListener("scroll", scrolltosection);
    tfire = 5;
  }
}
window.addEventListener("scroll", scrolltosection);
window.addEventListener("scroll", () => {
  if (
    (sections[0].offsetTop + innerHeight / 4 <= window.scrollY &&
      sections[0].offsetTop + innerHeight / 1.33 > window.scrollY) ||
    (sections[1].offsetTop + innerHeight / 4 <= window.scrollY &&
      sections[1].offsetTop + innerHeight / 1.33 > window.scrollY) ||
    (sections[2].offsetTop + innerHeight / 4 <= window.scrollY &&
      sections[2].offsetTop + innerHeight / 1.33 > window.scrollY) ||
    (sections[3].offsetTop + innerHeight / 4 <= window.scrollY &&
      sections[3].offsetTop + innerHeight / 1.33 > window.scrollY) ||
    (sections[4].offsetTop + innerHeight / 4 <= window.scrollY &&
      sections[4].offsetTop + innerHeight / 1.33 > window.scrollY)
  ) {
    window.addEventListener("scroll", scrolltosection);
    tfire = 6;
  }
});
var timer = null;
window.addEventListener(
  "scroll",
  function timerfire() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (tfire != 6) {
        navli[tfire].click(navli[tfire]);
      }
    }, 750);
  },
  false
);
/* ========== scroll to section end ========== */

/* ========== width ipad start ========== */
if ((h / 2 + h > w && w >= h) || h > w) {
  for (let i = 0; i < alength; i++) {
    a[i].style.fontSize = "min(4vh,2vw)";
  }
  for (let i = 0; i < cglasslength; i++) {
    cglass[i].style.width = " 90%";
  }
}
var ipad = function () {
  if (
    (window.innerHeight / 2 + window.innerHeight > window.innerWidth &&
      window.innerWidth >= window.innerHeight) ||
    window.innerHeight > window.innerWidth
  ) {
    for (let i = 0; i < alength; i++) {
      a[i].style.fontSize = "min(4vh,2vw)";
    }
    for (let i = 0; i < cglasslength; i++) {
      cglass[i].style.width = "90%";
    }
  } else if (
    window.innerHeight / 2 + window.innerHeight <= window.innerWidth &&
    window.innerWidth > window.innerHeight
  ) {
    for (let i = 0; i < alength; i++) {
      a[i].style.fontSize = "min(2.34vh,1.17vw)";
    }
    for (let i = 0; i < cglasslength; i++) {
      cglass[i].style.width = "80%";
    }
  }
};
window.addEventListener("resize", ipad);
/* ========== width ipad end ========== */

/* ========== vertical screens start ========== */
if (h > w) {
  window.addEventListener("scroll", checkScroll);
  pages.style.display = "none";
  toggle.style.display = "flex";
  nav.style.height = "7%";
  for (let i = 0; i < cglasslength; i++) {
    cglass[i].classList.add("v");
  }
  logos.classList.add("verticallogos");
  prlogos.style.width = "100%";
  for (let i = 0; i < cdivlength; i++) {
    cdiv[i].classList.add("verticalcdiv");
  }
  for (let i = 0; i < textlength; i++) {
    text[i].classList.add("verticaltext");
  }
  logoimg.style.margin = "0 2vw 0 4vw";
  logoimg.style.overflow = "hidden";
  developmentdiv.style.width = "min(25vh, 95%)";
  aboutusdiv.style.width = "min(27vh, 95%)";
}

var vertical = function () {
  if (window.innerHeight > window.innerWidth) {
    window.addEventListener("scroll", checkScroll);
    pages.style.display = "none";
    toggle.style.display = "flex";
    nav.style.height = "7%";
    for (let i = 0; i < cglasslength; i++) {
      cglass[i].classList.add("v");
    }
    logos.classList.add("verticallogos");
    prlogos.style.width = "100%";
    for (let i = 0; i < cdivlength; i++) {
      cdiv[i].classList.add("verticalcdiv");
    }
    for (let i = 0; i < textlength; i++) {
      text[i].classList.add("verticaltext");
    }
    logoimg.style.margin = "0 2vw 0 4vw";
    logoimg.style.overflow = "hidden";
    developmentdiv.style.width = "min(25vh, 95%)";
    aboutusdiv.style.width = "min(25vh, 95%)";
  } else if (window.innerWidth >= window.innerHeight) {
    window.removeEventListener("scroll", checkScroll);
    pages.style.display = "flex";
    toggle.style.display = "none";
    nav.style.height = "9.5%";
    for (let i = 0; i < cglasslength; i++) {
      cglass[i].classList.remove("v");
    }
    logos.classList.remove("verticallogos");
    prlogos.style.width = "15%";
    for (let i = 0; i < cdivlength; i++) {
      cdiv[i].classList.remove("verticalcdiv");
    }
    for (let i = 0; i < textlength; i++) {
      text[i].classList.remove("verticaltext");
    }
    logoimg.style.margin = "0 2vw 0 2vw";
    logoimg.style.overflow = "visible";
    developmentdiv.style.width = "min(50vh, 30%)";
    aboutusdiv.style.width = "min(50vh, 30%)";
  }
};
window.addEventListener("resize", vertical);
/* ========== vertical screens end ========== */

/* ========== font size start ========== */
if (h / 2 > w) {
  for (let i = 0; i < texth2length; i++) {
    texth2[i].style.fontSize = "min(8vh.10vw)";
    texth2[i].style.position = "relative";
  }
  for (let i = 0; i < texth3length; i++) {
    texth3[i].style.fontSize = "min(5.2vh,6.5vw)";
    texth3[i].style.margin = "2.5vh 0 0 0";
  }
  for (let i = 0; i < textplength; i++) {
    textp[i].style.fontSize = "min(3.6vh,4.5vw)";
    textp[i].style.margin = "1.5vh 0";
  }
  for (let i = 0; i < butlength; i++) {
    but[i].style.fontSize = "min(2.4vh,3vw)";
  }
}
if (h > w && h / 2 <= w) {
  for (let i = 0; i < texth2length; i++) {
    texth2[i].style.fontSize = "min(6vh,10vw)";
    texth2[i].style.position = "relative";
  }
  for (let i = 0; i < texth3length; i++) {
    texth3[i].style.fontSize = "min(4vh,8vw)";
    texth3[i].style.margin = "2vh 0 0 0";
  }
  for (let i = 0; i < textplength; i++) {
    textp[i].style.fontSize = "min(2.8vh,5.6vw)";
    textp[i].style.margin = "1.5vh 0";
  }
  for (let i = 0; i < butlength; i++) {
    but[i].style.fontSize = "min(2.4vh,3vw)";
  }
}
if (w / 2.21 + w <= h && h / 2 <= w) {
  for (let i = 0; i < texth2length; i++) {
    texth2[i].style.fontSize = "min(5vh,10vw)";
    texth2[i].style.position = "relative";
  }
  for (let i = 0; i < texth3length; i++) {
    texth3[i].style.fontSize = "min(3.5vh,7vw)";
    texth3[i].style.margin = "1.7vh 0 0 0";
  }
  for (let i = 0; i < textplength; i++) {
    textp[i].style.fontSize = "min(2.3vh,4.6vw)";
    textp[i].style.margin = "1.5vh 0";
  }
  for (let i = 0; i < butlength; i++) {
    but[i].style.fontSize = "min(2.1vh,3vw)";
  }
  graphich2.style.fontSize = "min(4.2vh,8.4vw)";
  developmenth2.style.fontSize = "min(4.2vh,8.4vw)";
  aboutush2.style.fontSize = "min(4.2vh,8.4vw)";
  muchmoreh2.style.fontSize = "min(4.2vh,8.4vw)";
}
if (h / 6.7 + h < w && h / 1.29 + h > w) {
  nfth3.style.fontSize = "min(5.8vh,3.5vw)";
}
if (h / 13 + h < w && h / 1.29 + h > w) {
  developmenth3.style.fontSize = "min(5.8vh,3.5vw)";
}
if (h / 6.65 + h < w && h / 3.95 + h > w) {
  aboutush3.style.fontSize = "min(4.7vh,3.8vw)";
}

var texts = function () {
  if (window.innerHeight / 2 > window.innerWidth) {
    for (let i = 0; i < texth2length; i++) {
      texth2[i].style.fontSize = "min(8vh.10vw)";
      texth2[i].style.position = "relative";
    }
    for (let i = 0; i < texth3length; i++) {
      texth3[i].style.fontSize = "min(5.2vh,6.5vw)";
      texth3[i].style.margin = "2.5vh 0 0 0";
    }
    for (let i = 0; i < textplength; i++) {
      textp[i].style.fontSize = "min(3.6vh,4.5vw)";
      textp[i].style.margin = "1.5vh 0";
    }
    for (let i = 0; i < butlength; i++) {
      but[i].style.fontSize = "min(2.4vh,3vw)";
    }
  } else if (
    window.innerHeight > window.innerWidth &&
    window.innerHeight / 2 <= window.innerWidth &&
    window.innerWidth / 2.21 + window.innerWidth > window.innerHeight
  ) {
    for (let i = 0; i < texth2length; i++) {
      texth2[i].style.fontSize = "min(6vh,10vw)";
      texth2[i].style.position = "relative";
    }
    for (let i = 0; i < texth3length; i++) {
      texth3[i].style.fontSize = "min(4vh,8vw)";
      texth3[i].style.margin = "2vh 0 0 0";
    }
    for (let i = 0; i < textplength; i++) {
      textp[i].style.fontSize = "min(2.8vh,5.6vw)";
      textp[i].style.margin = "1.5vh 0";
    }
    for (let i = 0; i < butlength; i++) {
      but[i].style.fontSize = "min(2.4vh,3vw)";
    }
  } else if (
    window.innerWidth / 2.21 + window.innerWidth <= window.innerHeight &&
    window.innerHeight / 2 <= window.innerWidth
  ) {
    for (let i = 0; i < texth2length; i++) {
      texth2[i].style.fontSize = "min(5vh,10vw)";
      texth2[i].style.position = "relative";
    }
    for (let i = 0; i < texth3length; i++) {
      texth3[i].style.fontSize = "min(3.5vh,7vw)";
      texth3[i].style.margin = "1.7vh 0 0 0";
    }
    for (let i = 0; i < textplength; i++) {
      textp[i].style.fontSize = "min(2.3vh,4.6vw)";
      textp[i].style.margin = "1.5vh 0";
    }
    for (let i = 0; i < butlength; i++) {
      but[i].style.fontSize = "min(2.1vh,3vw)";
    }
    graphich2.style.fontSize = "min(4.2vh,8.4vw)";
    developmenth2.style.fontSize = "min(4.2vh,8.4vw)";
    aboutush2.style.fontSize = "min(4.2vh,8.4vw)";
    muchmoreh2.style.fontSize = "min(4.2vh,8.4vw)";
  } else if (
    window.innerHeight / 6.7 + window.innerHeight < window.innerWidth &&
    window.innerHeight / 1.29 + window.innerHeight > window.innerWidth
  ) {
    nfth3.style.fontSize = "min(5.8vh,3.5vw)";
    developmenth3.style.fontSize = "min(5.8vh,3.5vw)";
    aboutush3.style.fontSize = "min(4.7vh,3.8vw)";
  } else if (
    window.innerHeight / 13 + window.innerHeight < window.innerWidth &&
    window.innerHeight / 6.7 + window.innerHeight >= window.innerWidth
  ) {
    developmenth3.style.fontSize = "min(5.8vh,3.5vw)";
  } else if (window.innerWidth >= window.innerHeight) {
    for (let i = 0; i < texth2length; i++) {
      header.classList.remove("hide");
      texth2[i].style.fontSize = "min(10vh,8vw)";
      texth2[i].style.position = "absolute";
    }
    for (let i = 0; i < texth3length; i++) {
      texth3[i].style.fontSize = "min(6.5vh, 5.2vw)";
      texth3[i].style.margin = "min(13vh, 10.4vw) 0 0 0";
    }
    for (let i = 0; i < textplength; i++) {
      textp[i].style.fontSize = "min(4.5vh, 3.6vw)";
    }
    for (let i = 0; i < butlength; i++) {
      but[i].style.fontSize = "min(3vh, 2.4vw)";
    }
  }
};
window.addEventListener("resize", texts);
/* ========== font size end ========== */

/* ========== preloder start ========== */
var preloader = document.querySelector(".preloader");
var body = document.getElementById("body");
window.addEventListener("load", vanish);
function vanish() {
  preloader.classList.add("disappear");
  body.classList.remove("loading");
}
/* ========== preloder end ========== */

/* ========== dynamic button start ========== */
const lerp = (current, target, factor) => {
  return current * (1 - factor) + target * factor;
};
let mousePosition = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};
class MagneticObject {
  constructor(domElement) {
    this.domElement = domElement;
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    this.triggerArea = 100;
    this.interpolationFactor = 0.8;
    this.lerpingData = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 },
    };
    this.resize();
    this.render();
  }
  resize() {
    window.addEventListener("resize", (e) => {
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }
  render() {
    const distanceFromMouseToObject = calculateDistance(
      mousePosition.x,
      mousePosition.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );
    let targetHolder = { x: 0, y: 0 };
    if (distanceFromMouseToObject < this.triggerArea) {
      this.domElement.classList.add("focus");
      targetHolder.x =
        (mousePosition.x -
          (this.boundingClientRect.left + this.boundingClientRect.width / 2)) *
        0.05;
      targetHolder.y =
        (mousePosition.y -
          (this.boundingClientRect.top + this.boundingClientRect.height / 2)) *
        0.05;
    } else {
      this.domElement.classList.remove("focus");
    }
    this.lerpingData["x"].target = targetHolder.x;
    this.lerpingData["y"].target = targetHolder.y;
    for (const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
        this.lerpingData[item].current,
        this.lerpingData[item].target,
        this.interpolationFactor
      );
    }
    this.domElement.style.transform = `translate(${this.lerpingData["x"].current}vmin, ${this.lerpingData["y"].current}vmin)`;
    window.requestAnimationFrame(() => this.render());
  }
}
const button = document.querySelectorAll(".learnmore");
const buttonlength = button.length;
for (let i = 0; i < buttonlength; i++) {
  new MagneticObject(button[i]);
}
/* ========== dynamic button end ========== */

/* ========== video click start ========== */
cvideo.addEventListener("click", () => {
  let nftvideo = document.getElementById("nftvideo");
  nftvideo.click();
});
/* ========== video click end ========== */