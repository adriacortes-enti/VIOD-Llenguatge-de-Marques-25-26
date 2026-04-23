import Player from './Player.js';
import Bombs from './Bombs.js';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

const config = {
    type: Phaser.AUTO,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

new Phaser.Game(config);

var player;
var bombs;

var score = 0;
var scoreText;

// COL·LISIONS
// TODO

// MÈTODES DE CONTROL DE FLUX
// Es carreguen recursos externs (imatges, sons, etc.)
function preload ()
{
    this.load.image('background', 'assets/background.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

// Inicialitza els elements de joc
function create ()
{
    // 1. Afegim elements a l'escena
    var backgroundImg = this.add.image(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 'background');
    
    // https://docs.phaser.io/api-documentation/namespace/gameobjects-components-size#displayheight
    backgroundImg.displayWidth = CANVAS_WIDTH;
    backgroundImg.displayHeight = CANVAS_HEIGHT;

    player = new Player(this, 100, 450);
    bombs = new Bombs(this);


    // 2. Definim col·lisions
    // TODO
}

// Lògica de joc. S'executa a cada frame
function update()
{
    bombs.update();
}