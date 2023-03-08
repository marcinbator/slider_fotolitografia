//Buttons
const revertButton = document.getElementById("flt-revert");
const leftButton = document.getElementById("flt-left");
const rightButton = document.getElementById("flt-right");
const tableButton = document.getElementById("flt-table-button");
const menuElements = document.querySelectorAll(".flt-side-elem");
//Elements
const slide = document.getElementById("flt-slide");
const sectionTitle = document.getElementById("flt-section-title");
const table = document.getElementById("flt-table");
const tableElements = document.querySelectorAll(".flt-table-elem");
//Arrays
const slides = [
  //1
  "<h2>Slajd 1</h2>",
  "<h2>Slajd 2</h2>",
  "<h2>Slajd 3</h2>",
  //2
  "<h2>Slajd 4</h2>",
  "<h2>Slajd 5</h2>",
  "<h2>Slajd 6</h2>",
  //3
  "<h2>Slajd 7</h2>",
  "<h2>Slajd 8</h2>",
  "<h2>Slajd 9</h2>",
  //4
  "<h2>Slajd 10</h2>",
  "<h2>Slajd 11</h2>",
  "<h2>Slajd 12</h2>",
];
const sections = [
  "Fotolitografia",
  "Technologie planarne",
  "Domieszkowanie lokalne",
  "Nowinki techniczne",
];
const sectionNums = [0, 3, 6, 9];
//Indicators
var currentSlide = 0;
var currentSection = 1;
//Functions
function changeSlide(num) {
  slide.innerHTML = slides[num];
  currentSlide = num;
  checkArrows();
  checkSections();
}
function checkArrows() {
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
function checkSections() {
  for (var i = 0; i < 4; i++) {
    var a = i + 1;
    if (currentSlide >= sectionNums[i] && currentSlide < sectionNums[a]) {
      document
        .getElementById("flt-menu-" + currentSection)
        .classList.remove("flt-menu-active");
      document.getElementById("flt-menu-" + a).classList.add("flt-menu-active");
      currentSection = a;
    }
  }
}
//Listeners
menuElements.forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    changeSlide(sectionNums[index]);
  });
});
tableElements.forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    changeSlide(index);
  });
});
revertButton.addEventListener("click", function () {
  changeSlide(0);
});
leftButton.addEventListener("click", function () {
  changeSlide(currentSlide - 1);
});
rightButton.addEventListener("click", function () {
  changeSlide(currentSlide + 1);
});
tableButton.addEventListener("click", function () {
  table.classList.toggle("flt-flex");
});
