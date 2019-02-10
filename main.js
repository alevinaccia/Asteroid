var W = 800;
var H = 600;

var fpsScale = 20;
var x = 0;

var player;
var gameController;

var spaceKey;

var config = {
    type: Phaser.AUTO,
    width: W,
    height: H,
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

var game = new Phaser.Game(config, this);


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

    if(spaceKey.isDown){
        player.shoot();
    }
}