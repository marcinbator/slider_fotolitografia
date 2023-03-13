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
  `
    <h3>Etap II - Nakładanie emulsji światłoczułej na podłoże Si</h3>
    <div class="flt-animation">
      <div
        class="flt-anim-up"
        style="background-color: black; width: 50%; height: 10px"
      >
        <span class="flt-desc">&#8595 Warstwa światłoczuła (fotorezyst)</span>
      </div>
      <img class="flt-image" src="images/flt-1.png" alt="" />
      <i
        id="flt-play-1"
        class="flt-play flt-button fa-regular fa-circle-play"
        ><span class="flt-tip">Odtwórz</span></i
      >
    </div>
    <div class="flt-text">
      Proces nakładania cienkiej warstwy
      <strong>emulsji światłoczułej</strong> na powierzchnię utlenionej
      płytki podłożowej. Bardzo ważne jest uzyskanie równomiernej warstwy
      emulsji, dlatego płytka jest mocowana przyssawką próżniową do
      stolika wykonującego szybki ruch obrotowy (ok. 20 000 obr/min).
    </div>`,
  `<h3>Etap III - Naświetlanie przez fotomaskę</h3>
          <div style="min-height: 40%;" class="flt-animation">
            <div class="flt-anim-up">
              <img class="flt-image" src="images/flt-4.png" alt="" />
              <span style="bottom: 60px" class="flt-desc"
                >Promieniowanie nadfioletowe</span
              >
            </div>
            <span
              style="display: block; bottom: 0px; left: 15%; font-size: small"
              class="flt-desc"
              >Maska fotolitograficzna &#8595</span
            >
            <img class="flt-image" src="images/flt-3.png" alt="" />
            <i
              id="flt-play-1"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
            Po wysuszeniu emulsji powierzchnia płytki jest
            <strong>naświetlana</strong> przez specjalną maskę kontaktową (tzw.
            <span class="flt-def"
              >fotomaskę
              <div class="flt-def-window">
                To szklany negatyw zawierający obraz fotograficzny
                poszczególnych warstw (obszarów domieszkowanych, metalizacji,
                itp). Do zrealizowania pełnego cyklu wytwarzania układu
                scalonego jest konieczny komplet fotomasek.
                <img
                  class="flt-image"
                  src="images/flt-2.png"
                  alt=""
                /></div></span
            >)
            <span class="flt-def"
              >promieniowaniem nadfioletowym
              <div class="flt-def-window">
                Jest to promieniowanie elektromagnetyczne o fali długości 10-400
                nm, nie wywołujące wrażeń wzrokowych u człowieka; obszar
                promieniowania nadfioletowego dzieli się umownie na 4 części:
                zakres A o długości fali 315-400 nm, zakres B 280-315 nm, zakres
                C 200-280 nm i nadfiolet próżniowy 10-200 nm, lub też dzieli się
                na nadfiolet bliski (200-400 nm) i nadfiolet daleki, próżniowy
                (10-200 nm), który swoją nazwę zawdzięcza temu, że można go
                badać tylko w próżni, gdyż fale o odpowiadających mu długościach
                są bardzo silnie pochłaniane przez powietrze. Do detekcji
                promieniowania nadfioletowego wykorzystuje się: fotoogniwa,
                fotopowielacze, przetworniki promieniowania.
                <br />
                <br />
                Najsilniejszym naturalnym źródłem promieniowania nadfioletowego
                jest Słońce, zaś najbardziej rozpowszechnionymi sztucznymi
                źródłami promieniowania nadfioletowego są lampy wyładowcze
                (głównie rtęciowe). Dzięki swoim właściwościom promieniowanie
                nadfioletowe jest wykorzystywane m.in. w technice oświetleniowej
                (świetlówki), analizie luminescencyjnej, badaniach
                nieniszczących, do sterylizacji pomieszczeń, w biologii w
                badaniach mikroskopowych tkanek i komórek, w kryminalistyce,
                muzealnictwie, w przemyśle do przyspieszania procesów
                polimeryzacji tworzyw sztucznych. Promieniowanie nadfioletowe
                odkryli 1801 J. Ritter i W.H. Wollaston.
              </div></span
            >. Operacje te są wykonywane w
            <strong>ochronnym świetle żółtym</strong>. Naświetlanie ma na celu
            spowodowanie odpowiednych procesów fotochemicznych w warstwie
            światłoczułej, tj.
            <span class="flt-def"
              >polimeryzację
              <div class="flt-def-window">
                Jest to reakcja, w wyniku której związki chemiczne o małej masie
                cząsteczkowej zwane monomerami lub mieszanina kilku takich
                związków reagują same ze sobą, aż do wyczerpania wolnych grup
                funkcyjnych, w wyniku czego powstają cząsteczki o wielokrotnie
                większej masie cząsteczkowej od substratów, tworząc polimer.
              </div></span
            >
            powodującą uodpornienie warstwy na działanie roztworu
            wytrawiającego.
          </div>`,
  "<h2>Slajd 4</h2>",
  "<h2>Slajd 5</h2>",
  "<h2>Slajd 6</h2>",
  //2
  "<h2>Slajd 7</h2>",
  "<h2>Slajd 8</h2>",
  "<h2>Slajd 9</h2>",
  "<h2>Slajd 10</h2>",
  "<h2>Slajd 11</h2>",
  "<h2>Slajd 12</h2>",
  //4
  "<h2>Slajd 13</h2>",
  "<h2>Slajd 14</h2>",
  "<h2>Slajd 15</h2>",
];
const sections = [
  "Fotolitografia",
  "Technologie planarne",
  "Domieszkowanie lokalne",
  "Nowinki techniczne",
];
const sectionNums = [0, 6, 11, 14];

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
}
function fltChangeSlide(num) {
  slide.innerHTML = slides[num];
  currentSlide = num;
  slideIndicator = currentSlide + 1;
  console.log("FLTSlide: " + slideIndicator);
  fltCheckArrows();
  fltCheckSections();
  fltLoadSlide();
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
      currentSlide >= sectionNums[2] + 1
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
    console.log("xd");
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
//Buttons
var defButtons = document.querySelectorAll(".flt-def");
var play1 = document.getElementById("flt-play-1");
//Elements
var defElems = document.querySelectorAll("flt-def-window");
//Listeners
defButtons.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.querySelector(".flt-def-window").classList.toggle("flt-block");
  });
});
play1?.addEventListener("click", function () {
  fltSlideAnim1();
});
//Functions
function fltSlideAnim1() {
  element = document.querySelector(".flt-anim-up");
  element.style.bottom = "50px";
  setTimeout(function () {
    element.style.bottom = "0px";
    document.querySelector(".flt-desc").classList.add("flt-block");
  }, 500);
}
function fltLoadSlide() {
  defElems = document.querySelectorAll("flt-def-window");
  defButtons = document.querySelectorAll(".flt-def");
  play1 = document.getElementById("flt-play-1");
  defButtons.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.querySelector(".flt-def-window").classList.toggle("flt-block");
    });
  });
  play1?.addEventListener("click", function () {
    fltSlideAnim1();
  });
}
