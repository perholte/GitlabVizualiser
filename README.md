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

Som utforming har vi valgt å ha ha vært element på hver sin side. Dette mener vi gjør siden oversiktlig og entydig. Navigasjonen skjer gjennom knapper øverst på siden, eller via bokser på hjemskjermen. Ved brede skjermer (typisk PC-skjermer og nettbrett) har vi plassert knappene horisontalt, mens ved smalere skjermer (typisk mobiltelefoner) har vi plassert knappene vertikalt. Dette gjør vi får at siden skal være lesbar på flere typer skjermer.

### Responsivitet

### Lokal lagring

### Parameterisert datauthenting

### Chakra

Vi har valgt å ta i bruk UI-biblioteket Chakra UI. Dette er et bibliotekt som gjør det lett å både ta i bruk ferdiglagde komponenter, og lage egne komponenter. I tillegg har den støtte får å ha et globalt fargetema samt mulighet for å implementere både light og dark mode. Gjennom Chakra har vi også fått bruk flexbox og CSSGrid.

### Recharts

Recharts er et populært grafbibliotek for React. Vi har brukt det til å lage et doughnut diagram slik at vi får presentert dataen vår på en hensiktsmessig måte.
