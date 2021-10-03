# GitLabViz

Dette er GitLabViz, en datavisualisering av vårt GitLab repository. Dataene som presenteres er

-   Meldingene fra de siste commitene
-   Antall commits fra hver student
-   Et tre med oversikt over git-branchene våre
-   En liste med våre issues

## Valg av løsninger

### Sideelementer

Av sideelementer har vi valgt å hente ut data fra tre områder som vi mener er sentrale i utvikling med Git/GitLab: commits, branches og issues.

I applikasjonen er det to sider som inneholder informasjon om **commits**: en for commitmeldingene fra de siste committene som er blitt pushet til main-branchen, og ett kakediagram som reflekterer mengden commits fra de ulike utviklerne.

**Branch**-dataene har vi visualisert gjennom en tre-graf som viser hvilke brancher som er merget og ikke.

**Issues** og **commit-meldinger** vises som en liste, hvor man kan trykke på tittelen for å se beskrivelsen.

Som utforming har vi valgt å ha hvert element på hver sin side. Dette mener vi gjør applikasjonen oversiktlig og entydig. Samtidig er det lett å navigere til de ulike sidene gjennom knappene i navigasjonsmenyen.

### Responsivitet

For å håndere forskjellige skjermstørrelser (feks laptop/mobil/tablett) har vi benyttet oss av prosenter av skjermhøyden og -bredden. Når skjermbredden blir smal (typisk mobiler) hånderer vi dette med bruk av mediaqueries ved å endre stylingen slik at innholdet ikke går utenfor skjermen. Et eksempel på dette er at navigasjonsmenyen viser alle knappene om de får plass, men når skjermen blir smal blir den endret til en hamburgermeny.

På eksempelet med hamburgermenyen har vi brukt [Chakra UI breakpoints](https://chakra-ui.com/docs/features/responsive-styles). For å skjule/vise elementer bruker vi koden `display={{ base: 'none', lg: 'flex' }`. Når bredden er større enn _lg_ (62em) så vil 'display' være av typen 'flex', men ellers 'none'. Chakra benytter seg av media queries for å få til dette, men for å vise at vi også mestrer 'vanlige' media queries har vi også brukt det i _AccordionList.css_.

### Lokal lagring

Applikasjonen benytter seg av **Localstorage** for å lagre hvilket fargetema ('light' eller 'dark') brukeren har valgt. Neste gang brukeren besøker siden kan vi hente denne dataen for å sette valgt fargetema.

På hovedsiden bruker vi **Sessionstorage** for å lagre navnet på brukeren. Når brukeren skriver inn navnet blir stringen satt i sessionstorage med tag-en 'name'. Denne verdien blir så hentet ut ved `sessionStorage.getItem('name')`, og presentert som en hilsen.

### Async/await

Vi har laget en samling av asynkrone funksjoner som ligger under _src/api/index.ts_. Denne filen definerer hvilke data vi henter ut fra gitlabs rest-api, samt utfører api-kallene. Videre har react-komponentene som mottar data definerte asynkrone funksjoner for å motta denne dataen.

Vi har også brukt _React Query_ for statehånderting i _IssueList.tsx_. Dette skulle vi gjerne brukt mer, men løste det som beskrevet over for å være sikre på at vi oppfyller kravene.

### Parameterisert datauthenting

På siden _commits_ har vi brukt to ulike typer sideelementer for å la brukeren velge parametre for hvilke commits som skal vises. Det første elementet er et input-element som inneholder antall commits. Denne inputen bestemmer hvor mange commits som skal vises i listen under. Det andre elementet som lar brukeren parametrisere innholde på siden er et dato-input felt. Her kan brukeren velge en dato, og siden vil da vise de eldste _commit_-ene som er nyere enn denne datoen.

På siden _issues_ lar vi brukeren velge om hen vil vise alle, kun åpne, eller kun lukkede issues. Dette gjør vi ved å ha en egen liste hvor vi filtrerer basert på dataen vi henter inn, slik at vi slipper å sende et nytt api-kall hver gang brukeren endrer dette filteret.

### Chakra

Vi har valgt å ta i bruk UI-biblioteket [Chakra UI](https://chakra-ui.com/). Dette er et bibliotek som gjør det lett å både ta i bruk ferdiglagde komponenter og style dem etter eget ønske. Biblioteket har flere komponenter som baserer seg på flexbox for å sikre responsisvt design uten å skrive for mye css selv. Vi har ved flere anledninger stylet disse for å få det utseendet vi ønsket.

### React Context

Selvom Chakra UI har støtte for light/dark theme har vi valgt å bruke React Context for å implementere dette. Koden hadde vært betraktelig ryddigere om vi hadde brukt Chakra Ui, men vi tok denne beslutningen for at det ikke skulle være noe tvil om vi kunne bruke React Context.

I navigasjonsmenyen har brukeren mulighet til å bytte tema ved å trykke på slider knappen. Vi bruker React Context til å gi alle komponentene lenger ned i domtreet tilgang til variabelen som sier om darkmode er aktivert eller ikke. Denne variabelen brukes av komponentene til å endre på stylingen.

### Recharts

Recharts er et populært grafbibliotek for React. Vi har brukt det til å lage et kakediagram slik at vi får presentert dataen vår på en hensiktsmessig måte.

### Gitgraph

Gitgraph-react er et bibliotek hvor man kan lage visualiseringer av git-brancher. Ved å hente branches vha API'et og iterativt branche disse ut fra master, viser vi den nåværende branch-strukturen i vårt repo. Gitgraph returnerer et svg-element, som vi igjen har wrappet i en svg slik at det skalerer greit.

### Testing

I tillegg til dependencies vi har fra start(create-react-app) har vi lagt til blant annet @babel/preset-env, @babel/preset-typescript, ts-node, og diverse config-filer.
Disse er for å hjelpe til med overgangen fra typescript til javascript når det kommer til syntax o.l.
Vi har brukt snapshottesting av appen, for å verifisere at den rendrer som den skal. Dette gjøres ved at man rendrer `<app/>` og `<header/` komponenten og tar et snapshot. Hver gang testen kjøres etter dette sjekker man om den rendrede komponenten matcher bildet som er tatt.

Vi har også testet funksjonaliteten til routing componentene i headeren. Dette er gjort ved at vi simulerer et klikk på navigasjonselementene, og deretter bruker `window.location.path` for å sjekke at applikasjonen navigerte til riktig path.
Samtidig sjekker vi at det er det riktige komponentet som blir _render_-et ved å lete etter elementer vi vet er til stede i de gitte komponentene.
Til slutt har vi også testet brukerinteraksjon ved å fylle inn en string i input field-et på forsiden, for så å sjekke at stringen lagres i sessionStorage.
Med tanke på at det er bruk av et eksternt api er det naturlig å teste api-kallene, men ettersom dette er komplisert og tidkrevende (og ikke et krav i dette prosjektet) valgte vi å ikke gjøre det.

**Testing av brukergrensesnitt og responsiv design: Gruppa skal beskrive/dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (liten skjerm horisontal + vertikal orientering) og en ordinær pc (stor skjerm).**

Etterhvert som vi har implementert komponenter, og gjort designendringer har vi testet disse endringene på de aktuelle skjermstørrelsene og bekreftet at det fungerer.
