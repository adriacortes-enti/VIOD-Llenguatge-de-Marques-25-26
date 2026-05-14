export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        this.create(x,y);
    }

    create(x,y) {
        // 1. Configuració de físiques

        // Afegim l'sprite
        this.physicsSprite = this.scene.physics.add.sprite(x,y, 'dude');

        // Activar el drag per al jugador
        this.physicsSprite.setInteractive({ useHandCursor: true });
        // Habilitar el sistema de draggable per a l'sprite
        this.scene.input.setDraggable(this.physicsSprite);

        // 2. Configuració d'animacions
        this.scene.anims.create({
            key: 'idle',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });
        
        // Reprodueix l'animació 'idle'
        this.physicsSprite.anims.play('idle');

        // 3. Configuració de la interacció de l'usuari
        // https://docs.phaser.io/api-documentation/event/input-events#drag
        // Drag: pointer, gameObject, dragX, dragY
        this.scene.input.on('drag', 
            (pointer, gameObject, dragX, dragY) => {
                this.physicsSprite.x = dragX;
                this.physicsSprite.y = dragY;
            }
        );

        this.lives = 3;
        this.setState('REAPAREIXENT');

    }

    setState(newState) {
        switch (newState) {
            case 'VIU':
                // https://docs.phaser.io/api-documentation/namespace/physics-arcade-components-enable#enablebody
                this.physicsSprite.enableBody();
                this.physicsSprite.clearTint();

                this.state = 'VIU';
                break;

            case 'MORT':
                // dura 2 segons i passa a 'REAPAREIXENT' si queden vides

                // no és visible i no afecten les col·lisions
                this.physicsSprite.disableBody(true, true);

                this.state = 'MORT';
                break;

            case 'REAPAREIXENT':
                // dura 3 segons i passa a 'VIU'
                
                // no afecten les col·lisions
                this.physicsSprite.disableBody(true, false);
                
                // sprite transparent
                this.physicsSprite.setTint(0x888888); // fa l'sprite fosc, falta revisar com fer-la transparent
                // this.physicsSprite.setAlpha(0.5);

                this.state = 'REAPAREIXENT';
                break;
            default:
                break;
        }
    }

    update() {

        
        
    }
}