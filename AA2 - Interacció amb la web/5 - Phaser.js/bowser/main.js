const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
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
    // TODO
}

// Inicialitza els elements de joc
function create ()
{
    // 1. Afegim elements a l'escena
    // TODO

    // 2. Definim col·lisions
    // TODO
}

// Lògica de joc. S'executa a cada frame
function update()
{
    // TODO
}