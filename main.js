
var W = 800;
var H = 600;

var player;

var config = {
    width: W,
    height: H,
    parent: 'idofcontainer',
    scene: { preload: preload, create: create, update: update },
};

var game = new Phaser.Game(config, this);


function preload() {

    this.load.image('PlayerSprite', './Assets/spaceship.png');
    this.load.image('LaserSprite', './Assets/laser.png');

}


function create() {

    player = new Player(this);


}


function update() {

    player.move();

}