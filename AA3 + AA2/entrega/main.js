import Player from './Player.js';
import Bombs from './Bombs.js';

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
var platforms;
var score = 0;
var scoreText;

// COL·LISIONS
function hitBomb(player, bomb) {
    console.log('ouch')
}

// MÈTODES DE CONTROL DE FLUX
// Es carreguen recursos externs (imatges, sons, etc.)
function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

// Inicialitza els elements de joc
function create ()
{
    // 1. AFEGIM ELEMENTS A L'ESCENA

    // Afegim imatges
    this.add.image(400, 300, 'sky');

    // Afegim plataformes
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    // Afegim jugador
    player = new Player(this, 100, 450);
    bombs = new Bombs(this);

    // Afegim textos
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // 2. DEFINIM COL·LISIONS (amb els arcadePhysics!)
    // Col·lisions entre elements

    //DESACTIVAR COLISIONS codi de stack overflow
    this.physics.add.collider(
        bombs.physicSpritesGroup,
        platforms,
        function (bomb, platform) {
            if (!bomb.getData('hasBounced')) {
                bomb.setData('hasBounced', true);
                // Desactiva la colisión solo para esta bomba
                bomb.body.checkCollision.up = false;
                bomb.body.checkCollision.down = false;
                bomb.body.checkCollision.left = false;
                bomb.body.checkCollision.right = false;
            }
        },
        null,
        this
    );
    
    // Col·lisions amb el Player
    this.physics.add.collider(player.physicsSprite, platforms);
    this.physics.add.overlap(player.physicsSprite, bombs.physicSpritesGroup, hitBomb, null, this);

    // temos per els punts
    this.time.addEvent({
        delay: 1000, // 1000 ms = 1 second
        callback: () => {
            score += 1;
            scoreText.setText('Score: ' + score);
        },
        callbackScope: this,
        loop: true
    });
}

// Lògica de joc. S'executa a cada frame
function update()
{
    player.update();
    bombs.update();
    // bombs.update();
}