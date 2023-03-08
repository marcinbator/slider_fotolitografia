const revertButton = document.getElementById("flt-revert");
const leftButton = document.getElementById("flt-left");
const rightButton = document.getElementById("flt-right");
const tableButton = document.getElementById("flt-table-button");
/////////
const menu1 = document.getElementById("flt-menu-1");
const menu2 = document.getElementById("flt-menu-2");
const menu3 = document.getElementById("flt-menu-3");
const menu4 = document.getElementById("flt-menu-4");
////////
const slide = document.getElementById("flt-slide");
const sectionTitle = document.getElementById("flt-section-title");
////////
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
////////
var currentSlide = 0;
var currentSection = 1;
function changeSlide(num) {
  slide.innerHTML = slides[num];
  currentSlide = num;
  if (currentSlide > 0) {
    revertButton.classList.remove("flt-none");
  } else {
    revertButton.classList.add("flt-none");
  }
  console.log("S " + currentSection);
  console.log("Sl " + currentSlide);
}
function toggleSection(num) {
  document
    .getElementById("flt-menu-" + currentSection)
    .classList.remove("flt-menu-active");
  document.getElementById("flt-menu-" + num).classList.add("flt-menu-active");
  currentSection = num;
  currentSlide = sectionNums[num - 1];
  sectionTitle.textContent = sections[currentSection - 1];
  changeSlide(currentSlide);
  if (currentSlide > 0) {
    leftButton.classList.remove("flt-none");
  }
  if (currentSlide == 0) {
    leftButton.classList.add("flt-none");
  }
  if (currentSlide == slides.length) {
    rightButton.classList.add("flt-none");
  }
  if (currentSlide < slides.length) {
    rightButton.classList.remove("flt-none");
  }
  console.log("S " + currentSection);
  console.log("Sl " + currentSlide);
}
////////
menu1.addEventListener("click", function () {
  toggleSection(1);
});
menu2.addEventListener("click", function () {
  toggleSection(2);
});
menu3.addEventListener("click", function () {
  toggleSection(3);
});
menu4.addEventListener("click", function () {
  toggleSection(4);
});
revertButton.addEventListener("click", function () {
  changeSlide(0, menu1.textContent);
  toggleSection(1);
  rightButton.classList.remove("flt-none");
  leftButton.classList.add("flt-none");
});
rightButton.addEventListener("click", function () {
  if (currentSlide + 2 < slides.length) {
    rightButton.classList.remove("flt-none");
    leftButton.classList.remove("flt-none");
    changeSlide(currentSlide + 1);
  } else if (currentSlide + 2 == slides.length) {
    rightButton.classList.add("flt-none");
    changeSlide(currentSlide + 1);
  }
  if (currentSlide == sectionNums[currentSection]) {
    toggleSection(currentSection + 1);
  }
});
leftButton.addEventListener("click", function () {
  if (currentSlide - 1 > 0) {
    leftButton.classList.remove("flt-none");
    changeSlide(currentSlide - 1);
    rightButton.classList.remove("flt-none");
  } else if (currentSlide - 1 == 0) {
    leftButton.classList.add("flt-none");
    changeSlide(currentSlide - 1);
  }
  if (currentSlide + 1 == sectionNums[currentSection - 1]) {
    document
      .getElementById("flt-menu-" + currentSection)
      .classList.remove("flt-menu-active");
    currentSection -= 1;
    document
      .getElementById("flt-menu-" + currentSection)
      .classList.add("flt-menu-active");
  }
  console.log(currentSlide);
  console.log(sectionNums[currentSection - 1]);
  console.log(currentSection);
});
