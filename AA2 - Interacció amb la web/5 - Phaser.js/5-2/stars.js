export default class Stars {
    constructor(scene) {
        this.scene = scene;

        this.create();
    }

    collectStar (player, star)
    {
        // Desactiva l'arcadeSprite
        star.disableBody(true, true);
    }

    create() {
        this.group = this.scene.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
    
        this.group.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

    }

    update() {


    }
}