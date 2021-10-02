# GitLabViz

Dette er GitLabViz, en datavisualisering av vårt GitLab repository. Dataene som presenteres er

-   Meldingene fra de siste commitene
-   Antall commits fra hver student
-   Et tre med oversikt git branchene våre
-   En liste med issuene våre

## Valg av løsninger

### Sideelementer

Av sideelementer har vi valgt å hente ut data fra tre områder som vi mener er sentrale i utvikling med Git/GitLab: commits, branches og issues.

På websiden er det to bokser som inneholder informasjon om commits: en for commitmeldingene fra de siste committene som er blitt pushet til main-branchen, og ett kakediagram som reflekterer mengden commits fra de ulike utviklerne.

Branch-dataene har vi visualisert gjennom en tre-graf som viser hvordan de ulike branchene våre har utviklet seg over tid. Dette følte vi var den mest oversiktlige måten å presentere slik data på.

Issuene våre har vi visualisert gjennom en modifiserbar liste, der man kan legge inn antall ønskede commits (fra 1 til 20) og et tidsinterval for commiten.

Som utforming har vi valgt å ha vært element på hver sin side. Dette mener vi gjør siden oversiktlig og entydig. Samtidig er det lett og navigere til deulike sidene gjennom knappene i headeren, eventuelt boksene på forsiden.

### Responsivitet

Ved brede skjermer (typisk PC-skjermer og nettbrett) har vi plassert knappene horisontalt, mens ved smalere skjermer (typisk mobiltelefoner) har vi plassert knappene vertikalt. Dette gjør vi får at siden skal være lesbar på flere typer skjermer.

### Lokal lagring

Vi har valgt å bruke Context-apiet til å gi komponenter lenger nede i tre-strukturen tilgang til hvilket tema brukeren har valgt. Brukeren velger tema ved å trykke på en slider-knapp i navigasjonsmenyen (bytte mellom light- og dark mode).

### Parameterisert datauthenting

På under-siden _commits_ har vi brukt to ulike typer sideelementer for å la brukeren velge parametre for hvilke commits som skal vises. Det første elementet er et input-element som inneholder antall commits. Denne inputen bestemmer hvor mange commits som skal vises i listen under. Det andre elementet som lar brukeren parametrisere innholde på siden er et dato-input felt. Her kan brukeren velge en dato, og siden vil da vise de eldste _commit_-ene som er nyere enn denne datoen.

### Chakra

Vi har valgt å ta i bruk UI-biblioteket Chakra UI. Dette er et bibliotekt som gjør det lett å både ta i bruk ferdiglagde komponenter, og lage egne komponenter. I tillegg har den støtte får å ha et globalt fargetema samt mulighet for å implementere både light og dark mode. Gjennom Chakra har vi også fått brukt flexbox og CSSGrid.

### Recharts

Recharts er et populært grafbibliotek for React. Vi har brukt det til å lage et doughnut diagram slik at vi får presentert dataen vår på en hensiktsmessig måte.

### Testing

    Prosjektet skal vise oppsett av og eksempel på testing med Jest - minimum er å ha en snapshottest og noen enkle tester på komponentenes oppførsel.
    Målet med dette kravet er at dere kommer i gang med testing, får erfaring i oppsett og en forståelse av hva vi typisk tester i React-applikasjoner. Vi legger lite vekt på omfanget av testingen, men dere skal vise at dere har forstått prinsippet i testingen.
    Testing av brukergrensesnitt og responsiv design: Gruppa skal beskrive/dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (liten skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm).

I tillegg til dependencies vi har fra start(create-react-app) har vi lagt til blant annet:

`@babel/core, @babel/plugin-transform-modules-commonjs, @babel/preset-env, @babel/preset-typescript, ts-node`

Disse er for å hjelpe til med overgangen fra typescript til javascript når det kommer til syntax o.l.

Vi har brukt snapshottesting av appen, for å verifisere at den rendrer som den skal. Dette gjøres ved at man rendrer `<app/>` komponenten og tar et snapshot. Hver gang testen kjøres etter dette sjekker man om den rendrede komponenten matcher dette bildet.

Vi har også testet funksjonaliteten til routing componentene i headeren. Dette er gjort ved at vi simulerer et klikk på navigasjonselementene, og deretter bruker `window.location.path` for å sjekke at applikasjonen navigerte til riktig _path_.
Samtidig sjekker vi at det er det riktige komponentet som blir _render_-et ved å lete etter elementer vi vet er til stede i de gitte komponentene.

Til slutt har vi også testet brukerinteraksjon ved å fylle inn en string i input field-et på forsiden, for så å sjekke at stringen representeres på alle sidene i applikasjonen.

Med tanke på at det er bruk av et eksternt api er det naturlig å teste api-kallene, men ettersom dette er komplisert og tidkrevende (og ikke et krav i prosjektet) valgte vi å ikke gjøre det.
