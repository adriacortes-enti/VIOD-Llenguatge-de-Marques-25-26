export default class Bombs {
    constructor(scene) {
        this.scene = scene;

        this.create();
    }

    spawnBomb() {
        for (var i = 0; i < 3; i++) {
            var newBomb = this.physicSpritesGroup.getFirstDead();

            // Reseteja els valors de bomb,
            // el posiciona a x,y
            // el fa visible i li activa les físiques
            newBomb.enableBody(true, Phaser.Math.Between(20, 780), -20, true, true);

            // Assigna la velocitat (velX, velY) a bomb
            newBomb.setVelocity(Phaser.Math.FloatBetween(-100, 100), 100);
            newBomb.setData('hasBounced', false);
            newBomb.setScale(1, 1); //reiniciar el tamany

            //reiniciar colisions
            newBomb.body.checkCollision.up = true;
            newBomb.body.checkCollision.down = true;
            newBomb.body.checkCollision.left = true;
            newBomb.body.checkCollision.right = true;
        }
    }

    create() {
        // Creem un pool de bombes reutilitzables
        this.physicSpritesGroup = this.scene.physics.add.group({
            key: 'bomb',
            repeat: 5, // 1 + 59 bombes = 60
            setXY: { x: 0, y: 0 }
        });

        this.physicSpritesGroup.children.iterate(
            function (bomb) {
                bomb.disableBody(true, true);
            }
        );   

        this.physicSpritesGroup.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        
        // Executa this.spawnBomb() cada 150 ms
        this.scene.time.addEvent({
            delay: 3000,
            callback: this.spawnBomb,
            callbackScope: this,
            loop: true
        });
    }

    update() {
        this.physicSpritesGroup.children.iterate(function (bomb) {

            bomb.setScale(bomb.scaleX + 0.005, bomb.scaleY + 0.005);

            if (bomb.y > 600) {
                bomb.disableBody(true, true);
            }

        });
    }
}