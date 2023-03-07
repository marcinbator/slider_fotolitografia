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
////////
var currentSlide = 0;
function changeSlide(num, text) {
  sectionTitle.textContent = text;
  slide.innerHTML = slides[num];
}
////////
menu1.addEventListener("click", function () {
  changeSlide(0, menu1.textContent);
});
menu2.addEventListener("click", function () {
  changeSlide(3, menu2.textContent);
});
menu3.addEventListener("click", function () {
  changeSlide(6, menu3.textContent);
});
menu4.addEventListener("click", function () {
  changeSlide(9, menu4.textContent);
});
