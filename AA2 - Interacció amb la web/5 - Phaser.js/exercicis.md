### Documentació Phaser
https://docs.phaser.io/

### Sandbox
https://phaser.io/sandbox

### Exemples
https://phaser.io/examples/v3.85.0

### PhaserByExample-v2
https://phaser.io/news/2024/04/phaser-by-example-book

# Exercici 1 - HolaMón
Crea un fitxer index.html amb un element &lt;head&gt; per importar l'script de phaser i un element &lt;body&gt; amb el codi bàsic de phaser.js per mostrar un missatge "Hola Món". Escriu el codi de JavaScript al final del &lt;body&gt; dins d'un element &lt;script&gt;.

Pistes: 
- Necessitaràs el codi JavaScript vist a l'apartat _2.3 Configuració inicial del projecte i cicle de vida_
- La documentació mostra com afegir l'objecte text. Fixa't que a l'exemple hi ha comentat un estil personalitzat (lletra 'Arial', mida de lletra 64 i color '#00ff00'). Phaser utilitza el "Default Style" + l'especificació pròpia de l'usuari.
- La creació d'elements nous al canvas de joc es defineix al create().

Documentació: https://docs.phaser.io/phaser/concepts/gameobjects/text

# Exercici 2 - Primer joc a Phaser
Segueix el tutorial oficial "Making your first Phaser game" i crea un petit videojoc funcional. Assegura't que funcionin les següents característiques del joc:

- el jugador es pot moure i saltar
- hi ha un món amb plataformes estàtiques
- es poden col·leccionar estrelles
- es mostra un marcador de puntuació
- apareix una bomba quan no queden estrelles
- si es col·lisiona amb una bomba, s'acaba la partida

Nota: L'objectiu de l'exercici és entendre el el cicle de vida de Phaser (preload, create, update) i familiaritzar-se en la creació de nous elements.

Tutorial "Making your first Phaser game": https://docs.phaser.io/phaser/getting-started/making-your-first-phaser-game

# Exercici 3 - Arquitectura modular amb Phaser
Reorganitza el codi de l'exercici 2 per a que el projecte sigui fàcil de mantenir. Crea un script per a cada element de joc i distribueix la lògica del main.js entre els diversos fitxers. Cada fitxer correspon a un element diferent i només es responsable de la seva informació i gestió.
- Afegeix l'atribut type="module" a l'element script de l'index.html.
- Crea un fitxer Player.js que contingui la classe del jugador (moviment, animacions, etc.).
- Crea un fitxer StarGroup.js per gestionar les estrelles del joc.
- Utilitza main.js com a punt d’entrada del joc, amb la configuració (config) i la creació de l’escena.
- Defineix els elements de joc com a atributs de l'escena i gestiona la creació d'objectes i les seves col·lisions des del create().
- Importa les classes amb import i utilitza-les dins de create() i update().

# Exercici 4 - TODO

# Exercici 5 - Arkanoid
Desenvolupa una versió bàsica del clàssic Arkanoid i personalitza-la al teu gust.
- (Player.js) Utilitza la classe Rectangle per a crear al Player. S'ha de poder moure horitzontalment mitjançant un cursor.
- (Blocks.js) Utilitza la classe Rectangle i l'element de grup per a crear l'agrupació física de blocs. S'ha de poder jugar amb una agrupació de 12 columnes i 6 files.
- (Ball.js) Utilitza la classe Circle per a crear la pilota. Aquesta ha de col·lisionar amb el Player, amb l'agrupació de Blocks i amb els límits del canvas.

- La pilota ha de començar aturada damunt del jugador i iniciar-se amb la tecla espai.
- Quan no quedin blocs, el joc mostra un missatge de victòria.
- Quan la pilota cau per sota del canvas, mostra un missatge de derrota.

Documentació interessant
https://docs.phaser.io/api-documentation/class/geom-circle
https://docs.phaser.io/api-documentation/class/geom-rectangle

Imatge de referència:
https://tn.com.ar/resizer/v2/retrogames-volve-a-jugar-al-arkanoid-FOHSVTEURG47U3BY2AUCVXGBMI.jpg?auth=3fe579f6121294d154f5d7ab8b096d8b59a999af8c0a69d557e4e4cfad0cc348&width=767