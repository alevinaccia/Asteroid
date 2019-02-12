const glb = {

    W : 800,
    H : 600,

}
var config = {

    type: Phaser.AUTO,
    width: glb.W,
    height: glb.H,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config, this);

function preload() {

    this.load.image('PlayerSprite', './Assets/spaceship.png');
    this.load.image('laserSprite', './Assets/laserSprite.png');

}


function create() {

    player = new Player(this);

    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}


function update() {

    player.move();

    if (spaceKey.isDown) {
        player.shoot();
    }
}