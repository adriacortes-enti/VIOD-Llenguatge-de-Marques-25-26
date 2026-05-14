export default class Bombs {
    constructor(scene) {
        this.scene = scene;

        this.create();
    }

    spawnBomb() {
        var newBomb = this.physicSpritesGroup.getFirstDead();

        // Reseteja els valors de bomb,
        // el posiciona a x,y
        // el fa visible i li activa les físiques
        newBomb.enableBody(true, Phaser.Math.Between(20, 780), -20, true, true);

        // Assigna la velocitat (velX, velY) a bomb
        newBomb.setVelocity(0, 100);
    }

    create() {
        // Creem un pool de bombes reutilitzables
        this.physicSpritesGroup = this.scene.physics.add.group({
            key: 'bomb',
            repeat: 59, // 1 + 59 bombes = 60
            setXY: { x: 0, y: 0 }
        });

        this.physicSpritesGroup.children.iterate(
            function (bomb) {
                bomb.disableBody(true, true);
            }
        );   
        
        // Executa this.spawnBomb() cada 150 ms
        this.scene.time.addEvent({
            delay: 150,
            callback: this.spawnBomb,
            callbackScope: this,
            loop: true
        });
    }

    update() {
        this.physicSpritesGroup.children.iterate(function (bomb) {

            if (bomb.y > 600) {
                bomb.disableBody(true, true);
            }

        });
    }
}