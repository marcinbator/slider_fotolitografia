////SLIDER
//Buttons
const revertButton = document.getElementById("flt-revert");
const leftButton = document.getElementById("flt-left");
const rightButton = document.getElementById("flt-right");
const tableButton = document.getElementById("flt-table-button");
const mobileMenuButton = document.getElementById("flt-top-menu-arrow");
const fullScreen = document.getElementById("flt-full");

//Elements
const slide = document.getElementById("flt-slide");
const table = document.getElementById("flt-table");
const tableElements = document.querySelectorAll(".flt-table-elem");
const menuElements = document.querySelectorAll(".flt-side-elem");
const slidesContainer = document.querySelector(".flt-slide-container");

//Indicators
var currentSlide = 0;
var currentSection = 1;

//Functions
function fltSettings() {
  document.getElementById("flt-title").textContent = title;
  fltCheckArrows();
  fltCheckSections();
  fltLoadElems();
  fltLoadSliderListener();
  fltLoadListeners();
  fltChooseAnim();
  slide.innerHTML = slides[0];
}
function fltChangeSlide(num) {
  slide.innerHTML = slides[num];
  currentSlide = num;
  slideIndicator = currentSlide + 1;
  console.log("FLTSlide: " + slideIndicator);
  fltCheckArrows();
  fltCheckSections();
  fltLoadElems();
  fltLoadSliderListener();
  fltLoadListeners();
  fltChooseAnim();
  if (slideContent) {
    var table = checkSlideParts();
    slideContent.innerHTML = table[0];
  }
}
function fltCheckArrows() {
  if (currentSlide > 0) {
    leftButton.classList.remove("flt-none");
    revertButton.classList.remove("flt-none");
  } else {
    leftButton.classList.add("flt-none");
    revertButton.classList.add("flt-none");
  }
  if (currentSlide == slides.length - 1) {
    rightButton.classList.add("flt-none");
  } else {
    rightButton.classList.remove("flt-none");
  }
}
function fltCheckSections() {
  for (var i = 0; i < sectionNums.length; i++) {
    var a = i + 1;
    if (
      (currentSlide >= sectionNums[i] && currentSlide < sectionNums[a]) ||
      currentSlide >= sectionNums[sectionNums.length - 1]
    ) {
      document
        .getElementById("flt-menu-" + currentSection)
        .classList.remove("flt-menu-active");
      document.getElementById("flt-menu-" + a).classList.add("flt-menu-active");
      currentSection = a;
      console.log("FLTSection: " + currentSection);
    }
  }
}
function fltToggleFullScreen() {
  if (slidesContainer.requestFullscreen) {
    slidesContainer.requestFullscreen();
  } else if (slidesContainer.webkitRequestFullscreen) {
    slidesContainer.webkitRequestFullscreen();
  } else if (slidesContainer.msRequestFullscreen) {
    slidesContainer.msRequestFullscreen();
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//Listeners
menuElements.forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    fltChangeSlide(sectionNums[index]);
  });
});
tableElements.forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    fltChangeSlide(index);
  });
});
revertButton.addEventListener("click", function () {
  fltChangeSlide(0);
});
leftButton.addEventListener("click", function () {
  fltChangeSlide(currentSlide - 1);
});
rightButton.addEventListener("click", function () {
  fltChangeSlide(currentSlide + 1);
});
tableButton.addEventListener("click", function () {
  table.classList.toggle("flt-flex");
});
mobileMenuButton.addEventListener("click", function () {
  menuElements.forEach(function (elem) {
    elem.classList.toggle("flt-flex");
  });
});
fullScreen.addEventListener("click", fltToggleFullScreen);

////CONTENT
//Elements
var slideContent;
//Indicators
var currentPart = 0;
//Buttons
var defButtons, play1, play2, play3, animSlider;
//Functions
function fltLoadElems() {
  slideContent = document.getElementById("flt-slide-content");
  animSlider = document.getElementById("flt-anim-slider");
  defButtons = document.querySelectorAll(".flt-def");
  play1 = document.getElementById("flt-play-1");
  play2 = document.getElementById("flt-play-2");
  play3 = document.getElementById("flt-play-3");
}
function fltLoadSliderListener() {
  animSlider?.addEventListener("input", function () {
    fltAnimate(this.value);
  });
}
function fltLoadListeners() {
  defButtons.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.querySelector(".flt-def-window").classList.toggle("flt-abs-block");
    });
  });
  play1?.addEventListener("click", function () {
    fltSlideAnim1();
  });
  play2?.addEventListener("click", function () {
    fltSlideAnim2();
  });
  play3?.addEventListener("click", function () {
    fltSlideAnim3();
  });
  console.log("Listeners loaded.");
}
//Animations
function fltChooseAnim() {
  if (play1) {
    fltSlideAnim1();
  }
  if (play2) {
    fltSlideAnim2();
  }
  if (play3) {
    fltSlideAnim3();
  }
}
function checkSlideParts() {
  var table;
  if (currentSection == 1) {
    table = slideElems1;
  } else {
    table = slideElems2;
  }
  return table;
}
function fltAnimate(scrollValue) {
  var table = checkSlideParts();
  var elemIndex = (scrollValue - (scrollValue % 100)) / 100;
  if (currentPart != elemIndex) {
    slideContent.innerHTML = table[elemIndex];
    currentPart = elemIndex;
    console.log("Updated part.");
    fltLoadElems();
    fltLoadListeners();
    fltChooseAnim();
    console.log("Loaded part listeners.");
  }
}
function fltSlideAnim1() {
  element = document.querySelector(".flt-anim-up");
  element.style.bottom = "50px";
  setTimeout(function () {
    element.style.bottom = "0px";
    document.querySelector(".flt-desc")?.classList.add("flt-block");
  }, 500);
}
function fltSlideAnim2() {
  element = document.querySelector(".flt-anim-up");
  element.style.bottom = "50px";
  setTimeout(function () {
    element.style.bottom = "-20px";
    document.querySelector(".flt-desc")?.classList.add("flt-block");
    setTimeout(function () {
      element.style.bottom = "50px";
      setTimeout(function () {
        element.style.bottom = "-20px";
      }, 500);
    }, 500);
  }, 500);
}
function fltSlideAnim3() {
  var img1 = document.getElementById("flt-img2-1");
  var img2 = document.getElementById("flt-img2-2");
  img2.classList.remove("flt-img-2-visible");
  img1.classList.add("flt-img-2-visible");
  setTimeout(function () {
    img1.classList.remove("flt-img-2-visible");
    img2.classList.add("flt-img-2-visible");
  }, 2000);
}
