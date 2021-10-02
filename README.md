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

**Endre dette:**
~~Issuene våre har vi visualisert gjennom en modifiserbar liste, der man kan legge inn antall ønskede commits (fra 1 til 20) og et tidsinterval for commiten.~~

Som utforming har vi valgt å ha vært element på hver sin side. Dette mener vi gjør siden oversiktlig og entydig. Samtidig er det lett og navigere til deulike sidene gjennom knappene i headeren, eventuelt boksene på forsiden.

### Responsivitet

For å håndere forskjellige skjermstørrelser (feks laptop/mobil/tablett) har vi benyttet av oss prosenter av skjermhøyden og -bredden. Når skjermbredden blir smal (typisk mobiler) hånderer vi dette ved hjelp av mediaqueries, for å endre stylingen slik at innholdet ikke går utenfor skjermen. Et eksempel på dette er at navigasjonsmenyen viser alle knappene om de får plass, men når skjermen blir smal blir endret til en hamburgermeny.

På eksempelet med hamburgermenyen har vi brukt [Chakra UI breakpoints](https://chakra-ui.com/docs/features/responsive-styles). Så når vi har koden `display={{ base: 'none', lg: 'flex' }` for å vise/skjule elementer, så fungerer den slik at når bredden er større enn _lg_ (62em) så vil 'display' være av typen 'flex', men ellers 'none'. Chakra benytter seg av media queries for å få til dette, men for å vise at vi også mestrer media queries har vi også brukt det i noen filer som feks. _issues.css_.

### Lokal lagring

Applikasjonen benytter seg av **Localstorage** for å lagre hvilket fargetema ('light' eller 'dark') brukeren har valgt. Dette gjør at neste gang brukeren besøker siden så kan vi hente denne dataen for å sette fargetema.

På hovedsiden bruker vi **Sessionstorage** for å lagre navnet på brukeren.
**_Utdype her_**

### Parameterisert datauthenting

På siden _commits_ har vi brukt to ulike typer sideelementer for å la brukeren velge parametre for hvilke commits som skal vises. Det første elementet er et input-element som inneholder antall commits. Denne inputen bestemmer hvor mange commits som skal vises i listen under. Det andre elementet som lar brukeren parametrisere innholde på siden er et dato-input felt. Her kan brukeren velge en dato, og siden vil da vise de eldste _commit_-ene som er nyere enn denne datoen.

På siden _issues_ lar vi brukeren velge om hen vil vise alle, kun åpne eller kun lukkede issues. Dette gjør vi ved å har en egen liste hvor vi filtrerer basert på dataen vi henter inn, slik at vi slipper å sende et nytt api-kall hver gang brukeren endrer dette filteret.

### Chakra

Vi har valgt å ta i bruk UI-biblioteket [Chakra UI](https://chakra-ui.com/). Dette er et bibliotekt som gjør det lett å både ta i bruk ferdiglagde komponenter og style dem etter eget ønske.
I tillegg har den støtte for å ha et globalt fargetema samt mulighet for å implementere både light og dark mode.

### React Context

Selvom Chakra UI har støtte for light/dark theme har vi valgt å bruke React Context for å implementere dette. Koden hadde vært betraktelig ryddigere om vi hadde brukt Chakra Ui, men vi tok denne beslutningen for at det ikke skulle være noe tvil om vi kunne bruke React Context.

I navigasjonsmenyen har brukeren mulighet til å bytte tema ved å trykke på slider knappen. Vi bruker React Context til å gi alle komponentene lenger ned i filtreet tilgang til variabelen som sier om darkmode er aktivert eller ikke. Denne variabelen brukes av komponentene til å endre på stylingen.

### Recharts

Recharts er et populært grafbibliotek for React. Vi har brukt det til å lage et doughnut diagram slik at vi får presentert dataen vår på en hensiktsmessig måte.

### Gitgraph

Gitgraph-react er et bibliotek hvor man kan lage visualiseringer av git-brancher. Ved å hente branches vha API'et og iterativt branche disse ut fra master har vi vist branch-strukturen i vårt repo. Gitgraph returnerer et svg-element, som vi igjen har wrappet i en svg slik at det skalerer greit.

### Testing

I tillegg til dependencies vi har fra start(create-react-app) har vi lagt til blant annet:
@babel/core, @babel/plugin-transform-modules-commonjs, @babel/preset-env, @babel/preset-typescript, ts-node
Disse er for å hjelpe til med overgangen fra typescript til javascript når det kommer til syntax o.l.
Vi har brukt snapshottesting av appen, for å verifisere at den rendrer som den skal. Dette gjøres ved at man rendrer <app/> komponenten og tar et snapshot. Hver gang testen kjøres etter dette sjekker man om den rendrede komponenten matcher dette bildet.

Vi har også testet funksjonaliteten til routing componentene i headeren. Dette er gjort ved at vi simulerer et klikk på navigasjonselementene, og deretter bruker `window.location.path` for å sjekke at applikasjonen navigerte til riktig path.
Samtidig sjekker vi at det er det riktige komponentet som blir _render_-et ved å lete etter elementer vi vet er til stede i de gitte komponentene.
Til slutt har vi også testet brukerinteraksjon ved å fylle inn en string i input field-et på forsiden, for så å sjekke at stringen representeres på alle sidene i applikasjonen.
Med tanke på at det er bruk av et eksternt api er det naturlig å teste api-kallene, men ettersom dette er komplisert og tidkrevende (og ikke et krav i prosjektet) valgte vi å ikke gjøre det.
