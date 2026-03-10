import Player from './Player.js';

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
var platforms;
var stars;

// Es carreguen recursos externs (imatges, sons, etc.)
function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function collectStar (player, star)
{
    star.disableBody(true, true);
}

// Inicialitza els elements de joc
function create ()
{
    // 1. Afegim elements a l'escena
    // Afegim imatges
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'star');

    // Afegim plataformes
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // Afegim jugador
    player = new Player(this, 100, 450);

    // Ho passem a Player.js
    /* player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true); */

    // Afegim estrelles
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    // 2. Configurem animacions
    // --

    // 3. Configurem les colissions
    this.physics.add.collider(player.body, platforms);
    this.physics.add.collider(stars, platforms);

    this.physics.add.overlap(player, stars, collectStar, null, this);

    // 4. Altres configuracions

    
}

// Lògica de joc. S'executa a cada frame
function update()
{
    player.update();
    // stars.update();
    // bombs.update();
}