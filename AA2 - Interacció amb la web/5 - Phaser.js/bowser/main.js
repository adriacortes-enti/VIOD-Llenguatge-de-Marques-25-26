import Player from './Player.js';
import Bombs from './Bombs.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.image('background', 'https://placehold.co/800x600');
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
    this.add.image(400, 300, 'background');

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