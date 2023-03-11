////SETTINGS
//Info
const title = "Fotolitografia i technologie planarne";

//Arrays
const slides = [
  //1
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3>Etap I</h3>
    <div class="flt-text">
      <span class="flt-def"
        >Fotolitografia
        <div class="flt-def-window">
          Polega na wielokrotnym nakładaniu na powstającą strukturę
          krzemową światłoczułych masek, które po naświetleniu i
          potraktowaniu odpowiednim roztworem odsłaniają jedynie wybrane
          powierzchnie krzemu dla kolejnych procesów. Naświetlanie
          przypomina w pewnym stopniu wyświetlanie slajdów na ekranie,
          rolę slajdu pełni maska wzorcowa - podstawowa różnica polega na
          tym, że naświetlany obraz jest pomniejszoną, a nie powiększoną
          wersją oryginału.
        </div></span
      >
      polega na zastosowaniu emulsji światłoczułej (tzw.
      <strong>fotorezystu</strong>) do maskowania i lokalnego wytrawiania
      odsłoniętych warstw SiO<sub>2</sub>, Si<sub>3</sub>N<sub>4</sub>,
      Al, krzemu polikrystalicznego itp. Proces fotolitografii pokazany
      jest tu na przykładzie ważniejszych faz procesu wytwarzania
      <span class="flt-def"
        >okien
        <div class="flt-def-window">
          Wytrawiona przestrzeń w warstwie SiO<sub>2</sub>,
          Si<sub>3</sub>N<sub>4</sub>, Al, krzemu polikrystalicznego itp.
          odsłaniająca wybrane obszary płytki podłożowej.
        </div></span
      >
      w warstwie SiO<sub>2</sub>.
    </div>
    <img class="flt-image" src="images/flt-1.png" alt="" />`,
  `<h3>Etap II - Nakładanie emulsji światłoczułej na podłoże Si</h3>
    <img class="flt-image" src="images/flt-1.png" alt="" />
    <div class="flt-text">
      Proces nakładania cienkiej warstwy
      <strong>emulsji światłoczułej</strong> na powierzchnię utlenionej
      płytki podłożowej. Bardzo ważne jest uzyskanie równomiernej warstwy
      emulsji, dlatego płytka jest mocowana przyssawką próżniową do
      stolika wykonującego szybki ruch obrotowy (ok. 20 000 obr/min).
    </div>`,
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

////SLIDER
//Buttons
const revertButton = document.getElementById("flt-revert");
const leftButton = document.getElementById("flt-left");
const rightButton = document.getElementById("flt-right");
const tableButton = document.getElementById("flt-table-button");
const mobileMenuButton = document.getElementById("flt-top-menu-arrow");
const fullScreen = document.getElementById("flt-full");
const defButtons = document.querySelectorAll(".flt-def");

//Elements
const slide = document.getElementById("flt-slide");
const table = document.getElementById("flt-table");
const tableElements = document.querySelectorAll(".flt-table-elem");
const menuElements = document.querySelectorAll(".flt-side-elem");
const slidesContainer = document.querySelector(".flt-slide-container");
const defElems = document.querySelectorAll("flt-def-window");

//Indicators
var currentSlide = 0;
var currentSection = 1;

//Functions
function fltSettings() {
  document.getElementById("flt-title").textContent = title;
}
function fltChangeSlide(num) {
  slide.innerHTML = slides[num];
  currentSlide = num;
  slideIndicator = currentSlide + 1;
  console.log("FLTSlide: " + slideIndicator);
  fltCheckArrows();
  fltCheckSections();
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
  for (var i = 0; i < 4; i++) {
    var a = i + 1;
    if (
      (currentSlide >= sectionNums[i] && currentSlide < sectionNums[a]) ||
      currentSlide >= 9
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
defButtons.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.querySelector(".flt-def-window").classList.toggle("flt-block");
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
