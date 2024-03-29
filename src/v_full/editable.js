////SETTINGS
//Tytuł prezentacji
const title = "Fotolitografia i technologie planarne";

//Nazwy sekcji
const sections = [
  "Fotolitografia",
  "Technologia planarna",
  "Nowinki techniczne",
];

//Numery slajdów od których zaczyna się dana sekcja
const sectionNums = [0, 3, 6];

//Tablica z kodem slajdów
const slides = [
  //1
  `<div class="flt-title-slide">
            <h2>Fotolitografia i technologia planarna</h2>
            <h4>
              Wykonał Marcin Bator
              <h5>na podstawie prezentacji Waldemara Obirka</h5>
            </h4>
            <h4>Opiekun: dr inż. Mariusz Mączka</h4>
          </div>`,
  `<div class="flt-title-slide flt-section">
            <h2>Fotolitografia</h2>
          </div>`,
  `<div id="flt-slide-content" class="flt-slide-content"></div>
          <input
            id="flt-anim-slider"
            class="flt-range"
            type="range"
            min="1"
            max="599"
            value="1"
          />
    `,
  //2
  `<div class="flt-title-slide flt-section">
            <h2>Technologia planarna</h2>
          </div>`,
  `<div id="flt-slide-content" class="flt-slide-content"></div>
          <input
            id="flt-anim-slider"
            class="flt-range"
            type="range"
            min="1"
            max="599"
            value="1"
          />`,
  //3
  `<div class="flt-title-slide flt-section">
            <h2>Nowinki techniczne</h2>
          </div>`,
  `<h2>Nowinki techniczne</h2>
          <img class="flt-image" src="images/flt-10.png" alt="" />
          <div style="font-size: x-large; margin: 10px">
            Będąca siłą napędową mikroelektroniki potrzeba upakowania wewnątrz
            układu scalonego coraz większej liczby
            <span class="flt-def"
              >tranzystorów
              <div class="flt-def-window">
                Przyrząd półprzewodnikowy trójelektrodowy, umożliwiający
                wzmacnianie mocy sygnałów elektrycznych. Stanowi element czynny
                układów elektronicznych. Pełni funkcję wzmacniacza,
                przełącznika, detektora itp. Tranzystory dzieli się na:
                bipolarne i unipolarne (polowe).
              </div></span
            >
            zmusza producentów do sięgania po technologie o coraz mniejszym
            wymiarze charakterystycznym. To z kolei wymusza stosowanie w
            wykorzystywanym do produkcji układów procesie
            <span class="flt-def"
              >fotolitograficznym
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
            światła o coraz mniejszej długości fali. Obecnie stosowane procesy
            nie używają już światła widzialnego, a
            <span class="flt-def"
              >promieniowania nadfioletowego
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
            >. Przy długości fali ok. <strong>248 nanometrów</strong> możliwe
            jest uzyskanie wymiaru charakterystycznego rzędu 150-120 nanometrów.
          </div>`,
  `<h2>Metoda konkurencyjna dla fotolitografii</h2>
          <img class="flt-image" src="images/flt-11.png" width="100px" alt="" />
          <div style="font-size: x-large; margin: 10px">
            W dzisiejszych czasach do produkcji <strong>procesorów</strong> wykorzystuje się
            proces <strong>rentgenolitografii</strong>. Odmiana ta polega na
            użyciu fal o długości od 0,4 do 1 nm, czyli promieni rentgenowskich.
            Jako podłoża masek do rentgenolitografii stosowane są cienkie
            membrany krzemowe oraz takie materiały jak tytan, SiC, mylar,
            poliamidy czy inne, natomiast jako materiał pochłaniający
            promieniowanie - złoto. Podstawową zaletą zastosowania promieni
            rentgenowskich o długości fali około 800 razy krótszej od fal
            stosowanych w klasycznej fotoligrafii jest uzyskanie większej
            rozdzielczości.
          </div>`,
  `<h2>Najnowsze mikroprocesory</h2>
          <img class="flt-image" src="images/flt-19.png" width="100px" alt="" />
          <div style="font-size: x-large; margin: 10px">
            Mistrzem świata na nanometrze kwadratowym jest holenderska firma ASML. ASML 
            produkuje maszyny fotolitograficzne o największej gęstości tranzystorów i połączeń na "waflu krzemowym".
             Dziesiątki miliardów tranzystorów, <strong>200 razy mniejszych niż czerwona krwinka.</strong> Dzięki ASML najnowsze procesory wykonywane 
             są w 7-nanomentrowym procesie technologicznym, czyli minimalnej odległości między tranzystorami i połączeniami. 
             Dla porównania ludzki włos ma grubość 80 tys. nanometrów. Nikon i Canon budują podobne maszyny, ale w 14-nanomentrowym procesie technologicznym.
          </div>`,
  `<div class="flt-title-slide flt-section">
            <h2>Dziękuję za uwagę</h2>
          </div>`,
];
const slideElems1 = [
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap I</h3>
    <div class="flt-animation1">
      <img class="flt-image" src="images/flt-1.png" alt="" />
      <div style="font-size: x-large; margin: 10px">
      Fotolitografia polega na zastosowaniu emulsji światłoczułej (tzw.
        <strong>fotorezystu</strong>) do maskowania i lokalnego wytrawiania
        odsłoniętych warstw SiO<sub>2</sub>, Si<sub>3</sub>N<sub>4</sub>,
        Al, krzemu polikrystalicznego itp. Proces fotolitografii pokazany
        jest tu na przykładzie ważniejszych faz procesu wytwarzania okien
        w warstwie SiO<sub>2</sub>.
      </div>
    </div>
    `,
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap II - Nakładanie emulsji światłoczułej na podłoże Si</h3>
    <div class="flt-animation1">
      <div
        class="flt-anim-up"
        style="background-color: black; width: 33%; height: 10px; right: 6%"
      >
        <span class="flt-desc"><i class="fa-solid fa-arrow-down"></i> Warstwa światłoczuła (fotorezyst)</span>
      </div>
      <img class="flt-image" src="images/flt-1.png" alt="" />
      <i
        id="flt-play-1"
        class="flt-play flt-button fa-regular fa-circle-play"
        ><span class="flt-tip">Odtwórz</span></i
      >
    </div>
    <div class="flt-text">
    <i class="flt-text-close fa-solid fa-xmark"></i>
      Proces nakładania cienkiej warstwy
      <strong>emulsji światłoczułej</strong> na powierzchnię utlenionej
      płytki podłożowej. Bardzo ważne jest uzyskanie równomiernej warstwy
      emulsji, dlatego płytka jest mocowana przyssawką próżniową do
      stolika wykonującego szybki ruch obrotowy (ok. 20 000 obr/min).
    </div>`,
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap III - Naświetlanie przez fotomaskę</h3>
          <div style="min-height: 40%;" class="flt-animation1">
            <div class="flt-anim-up">
              <img class="flt-image" src="images/flt-4.png" alt="" />
            </div>
            <span
              style="display: block; bottom: 0px; left: 15%;"
              class="flt-desc"
              >Maska fotolitograficzna <i class="fa-solid fa-arrow-down"></i></span
            >
            <img class="flt-image" src="images/flt-3.png" alt="" />
            <i
              id="flt-play-1"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
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
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap IV - odsłonięcie warstwy SiO<sub>2</sub></h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-3a.png"
                alt=""
              />
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-5.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Płytka jest naświetlana przez
            <span class="flt-def"
              >fotomaskę
              <div class="flt-def-window">
                To szklany negatyw zawierający obraz fotograficzny
                poszczególnych warstw (obszarów domieszkowanych, metalizacji,
                itp). Do zrealizowania pełnego cyklu wytwarzania układu
                scalonego jest konieczny komplet fotomasek.
                <img class="flt-image" src="images/flt-2.png" alt="" /></div
            ></span>
            osłaniającą określone obszary powierzchni, zatem po
            <strong>wywołaniu</strong> i <strong>utrwaleniu</strong> warstwa
            światłoczuła tworzy <strong>obraz negatywowy fotomaski</strong> (są
            również stosowane emulsje światłoczułe o właściwościach
            pozytywowych), czyli osłania tylko tę część powierzchni, która była
            naświetlona.
          </div>`,
  `
  <h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap V - wytrawienie okna w SiO<sub>2</sub></h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-5.png"
                alt=""
              />
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-6.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            W tej fazie płytka jest poddawana działaniu
            <span class="flt-def"
              >kwasu fluorowodorowego
              <div class="flt-def-window">
                Jest to wodny roztwór fluorowodoru. Stanowi bezbarwną ciecz o
                ostrej woni. Stężony kwas zawiera około 70% HF. Tworzy z wodą
                mieszaninę o temperaturze wrzenia 393K. Rozpuszcza większość
                metali oprócz złota, platyny i ołowiu. Pod jego wpływem
                krzemionka SiO<sub>2</sub> ulega przemianie w łatwo lotny
                SiF<sub>4</sub>.
              </div></span
            >
            w celu wytrawienia
            <span class="flt-def"
              >okna
              <div class="flt-def-window">
                Wytrawiona przestrzeń w warstwie SiO<sub>2</sub>,
                Si<sub>3</sub>N<sub>4</sub>, Al, krzemu polikrystalicznego itp.
                odsłaniająca wybrane obszary płytki podłożowej.
              </div></span
            >
            w odsłoniętej części warstwy <strong>SiO<sub>2</sub></strong
            >.
          </div>`,
  `<h2>Podstawowe fazy fotolitografii</h2>
    <h3 class="flt-etap">Etap VI - usunięcie warstwy światłoczułej</h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-6.png"
                alt=""
              />
              <span style="bottom: 70px" class="flt-desc"
                >Końcowy efekt fotolitografii</span
              >
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-7.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Ostatnim etapem
            <span class="flt-def"
              >fotolitografii
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
            jest <strong>usunięcie warstwy emulsji światłoczułej</strong>.
            Odbywa się to przez działanie odpowiednim odczynnikiem. W ten sposób
            otrzymuje się strukturę gotową do prowadzenia
            <span class="flt-def"
              >domieszkowania lokalnego
              <div class="flt-def-window">
                Ideę domieszkowania lokalnego, zwanego również selektywnym
                ilustruje poniższy rysunek na przykładzie dyfuzji lokalnej boru
                do podłoża krzemowego typu n. Płytka krzemowa jest pokryta
                warstwą SiO<sub>2</sub>, w której wykonano otwór. Warstwa
                dwutlenku krzemu stanowi skuteczną barierę uniemożliwiającą
                przenikanie domieszek do pokrytej tą warstwą powierzchni
                półprzewodnika, gdyż współczynnik dyfuzji domieszek SiO<sub
                  >2</sub
                >
                jest ok. 20-krotnie mniejszy niż Si.
                <img class="flt-image" src="images/flt-8.png" alt="" />
                Warstwa SiO<sub>2</sub> spełnia więc funkcję maski
                nieprzepuszczającej atomów domieszki. W związku z tym krzem jest
                domieszkowany tylko w obszarze okna. W procesie dyfuzji lokalnej
                funkcję maski może spełniać
                <strong>warstwa Si<sub>3</sub>N<sub>4</sub></strong
                >.
              </div></span
            >
            .
          </div>`,
];
const slideElems2 = [
  `<h2>Technologia planarna</h2>
          <img class="flt-image" src="images/flt-9.png" alt="" />
          <div style="font-size: x-large; margin: 10px">
            Pojęcie <strong>technologia planarna</strong>
            odnosi się do wytwarzania tranzystorów
            i układów scalonych
            w płytkach krzemowych i obejmuje swym znaczeniem zespół procesów
            technologicznych, w których są powtarzane sekwencje trzech operacji:
            <ul>
              <li>maskowania podłoża krzemowego warstwą Si</li>
              <li>litografii</li>
              <li>domieszkowania lokalnego.</li>
            </ul>
            Najbardziej charakterystyczną cechą technologii planarnej jest to,
            że wszystkie procesy obróbcze są prowadzone przez jedną
            powierzchnię, przy czym powierzchnia ta stanowi płaszczyznę, stąd
            pochodzi przymiotnik <i>planarna</i> - inaczej płaszczyznowa.
          </div>`,
  `<h3 class="flt-etap">Etap I - utlenianie</h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-12.png"
                alt=""
              />
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-13.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Najpierw płytka podłożowa (Si) jest
            <span class="flt-def"
              >utleniana
              <div class="flt-def-window">
                To proces polegający na odłączeniu elektronów od jonu, atomu lub
                grupy atomów, w wyniku czego wzrasta stopień utlenienia
                pierwiastka oddającego elektrony. Substancja utleniająca jest
                <strong>utleniaczem</strong>, zaś utleniana -
                <strong>reduktorem</strong>. <br /><br />
                Utlenianie prowadzi do uzyskania związku bogatszego w tlen. Jako
                katalizatory najczęsciej stosuje się miedź, srebro oraz ich
                tlenki.
              </div></span
            >
            w celu wytworzenia warstwy
            <strong>SiO<sub>2</sub></strong> spełniającej później funkcję
            <span class="flt-def"
              >maski
              <div class="flt-def-window">
                To szklany negatyw zawierający obraz fotograficzny
                poszczególnych warstw (obszarów domieszkowanych, metalizacji,
                itp). Do zrealizowania pełnego cyklu wytwarzania układu
                scalonego jest konieczny komplet fotomasek.
                <img class="flt-image" src="images/flt-2.png" alt="" /></div
            ></span>
            W procesie
            <span class="flt-def"
              >dyfuzji
              <div class="flt-def-window">
                To samorzutne wyrównywanie stężeń składników w układzie
                wieloskładnikowym, powodowane bezładnym ruchem cieplnym cząstek
                (jonów, atomów). Powoduje m.in. mieszanie się stykających się z
                sobą różnych gazów, cieczy, ciał stałych.
              </div></span
            >.
          </div>`,
  `<h3 class="flt-etap">Etap II - Fotolitografia</h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-14.png"
                alt=""
              />
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-15.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Obróbka litograficzna - zwykle litografia optyczna, czyli
            <span class="flt-def"
              >fotolitografia
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
            >. Po tym procesie w warstwie SiO<sub>2</sub> uzyskuje się
            <span class="flt-def"
              >okna
              <div class="flt-def-window">
                Wytrawiona przestrzeń w warstwie SiO<sub>2</sub>,
                Si<sub>3</sub>N<sub>4</sub>, Al, krzemu polikrystalicznego itp.
                odsłaniająca wybrane obszary płytki podłożowej.
              </div></span
            >
            odsłaniające powierzchnię krzemu w miejscach, w których ma być
            wykonane
            <span class="flt-def"
              >domieszkowanie
              <div class="flt-def-window">
                Ideę domieszkowania lokalnego, zwanego również selektywnym
                ilustruje poniższy rysunek na przykładzie dyfuzji lokalnej boru
                do podłoża krzemowego typu n. Płytka krzemowa jest pokryta
                warstwą SiO<sub>2</sub>, w której wykonano otwór. Warstwa
                dwutlenku krzemu stanowi skuteczną barierę uniemożliwiającą
                przenikanie domieszek do pokrytej tą warstwą powierzchni
                półprzewodnika, gdyż współczynnik dyfuzji domieszek SiO<sub
                  >2</sub
                >
                jest ok. 20-krotnie mniejszy niż Si.
                <img class="flt-image" src="images/flt-8.png" alt="" />
                Warstwa SiO<sub>2</sub> spełnia więc funkcję maski
                nieprzepuszczającej atomów domieszki. W związku z tym krzem jest
                domieszkowany tylko w obszarze okna. W procesie dyfuzji lokalnej
                funkcję maski może spełniać
                <strong>warstwa Si<sub>3</sub>N<sub>4</sub></strong
                >.
              </div></span
            >.
          </div>`,
  `<h3 class="flt-etap">Etap III - dyfuzja</h3>
          <div class="flt-animation-2">
            <div class="flt-2images">
              <img
                id="flt-img2-1"
                class="flt-img-2-visible flt-img-2 flt-image"
                src="images/flt-16.png"
                alt=""
              />
              <img
                id="flt-img2-2"
                class="flt-img-2 flt-image"
                src="images/flt-17.png"
                alt=""
              />
            </div>
            <i
              id="flt-play-3"
              class="flt-play flt-button fa-regular fa-circle-play"
              ><span class="flt-tip">Odtwórz</span></i
            >
          </div>
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Następnie płytka jest poddawana procesowi
            <span class="flt-def"
              >dyfuzji
              <div class="flt-def-window">
                To samorzutne wyrównywanie stężeń składników w układzie
                wieloskładnikowym, powodowane bezładnym ruchem cieplnym cząstek
                (jonów, atomów). Powoduje m.in. mieszanie się stykających się z
                sobą różnych gazów, cieczy, ciał stałych.
              </div></span
            >, przy czym atomy domieszki (w naszym przypadku
            <strong>boru</strong>) wnikają do krzemu tylko w miejscach
            niezamaskowanych warstwą SiO<sub>2</sub>. W ten sposób otrzymuje się
            warstwe <i>typu p (lub n)</i> o precyzyjnie określonych kształtach.
          </div>`,
  `<h3 class="flt-etap">Etap IV - domieszkowanie lokalne</h3>
  <img class="flt-image flt-img-trans"  src="images/flt-8.png" alt="" />
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Ideę domieszkowania lokalnego, zwanego również selektywnym ilustruje
            powyższy rysunek na przykładzie dyfuzji lokalnej boru do podłoża
            krzemowego typu n. Płytka krzemowa jest pokryta warstwą
            SiO<sub>2</sub>, w której wykonano otwór. Warstwa dwutlenku krzemu
            stanowi skuteczną barierę uniemożliwiającą przenikanie domieszek do
            pokrytej tą warstwą powierzchni półprzewodnika, gdyż współczynnik
            dyfuzji domieszek SiO<sub>2</sub>
            jest ok. 20-krotnie mniejszy niż Si.
            
            Warstwa SiO<sub>2</sub> spełnia więc funkcję <span class="flt-def"
              >fotomaski
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
            >
            nieprzepuszczającej atomów domieszki. W związku z tym krzem jest
            domieszkowany tylko w obszarze <span class="flt-def"
              >okna
              <div class="flt-def-window">
                Wytrawiona przestrzeń w warstwie SiO<sub>2</sub>,
                Si<sub>3</sub>N<sub>4</sub>, Al, krzemu polikrystalicznego itp.
                odsłaniająca wybrane obszary płytki podłożowej.
              </div></span
            >. W procesie dyfuzji lokalnej
            funkcję maski może spełniać
            <strong>warstwa Si<sub>3</sub>N<sub>4</sub></strong
            >.
          </div>`,
  `<h3 class="flt-etap">Etap V - kilkakrotne powtórzenie wszystkich etapów</h3>
  <img class="flt-image flt-img-trans" src="images/flt-18.png" style="max-height: 30vh; width: auto" />
          <div class="flt-text">
          <i class="flt-text-close fa-solid fa-xmark"></i>
            Kilkakrotne powtórzenie tej sekwencji procesów, przy różnych
            kształtach warstw odwzorowywanych w procesie
            <strong>fotolitografii</strong>, umożliwia otrzymanie struktur
            wielowarstwowych, spełniających funkcje różnych elementów, o
            wymaganych kształtach i określonej lokalizacji w
            <i>płytce podłożowej</i>. Powyżej przedstawiono schemat gotowej
            struktury
            <span class="flt-def"
              >diody Schottky'ego
              <div class="flt-def-window">
                Charakteryzuje się znikomo małym czasem przełączania (mniej niż
                <strong>1 ns</strong>) i małym spadkiem napięcia przy pracy w
                kierunku przewodzenia (ok. 0,4V). Baterię Schottky'ego uzyskuje
                się na styku aluminium z niezbyt silnie domieszkowanym krzemem
                typu n (na styku aluminium z silnie domieszkowanym krzemem typu
                n<sub>+</sub> powstaje kontakt omowy).
              </div></span
            >.
          </div>`,
];
