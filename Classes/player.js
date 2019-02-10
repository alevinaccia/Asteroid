
class Player {
    constructor(contex) {

        this.player = contex.physics.add.sprite(W / 2, H / 2, 'PlayerSprite');

        this.rotationSpeed = 0.1;
        this.speed = 2;
        this.context = contex;
        this.laserContainer = [];
        this.laser;
        this.gameController = new controller;
        this.fristShot = true;

        this.cursors = contex.input.keyboard.createCursorKeys();


    }

    move() {

        if (this.cursors.up.isDown) {
            //Move the player forward

            this.player.x += Math.cos(this.player.rotation - Math.PI / 2) * 10;
            this.player.y += Math.sin(this.player.rotation - Math.PI / 2) * 10;

        }

        if (this.cursors.left.isDown) {

            //Rotate the player left
            this.player.rotation -= this.rotationSpeed;

        }
        if (this.cursors.right.isDown) {

            //Rotate the player right
            this.player.rotation += this.rotationSpeed;

        }
    }

    shoot() {

        this.laserContainer.push(new Laser(
            Math.cos(this.player.rotation - Math.PI / 2) * 10, //the speed to apply to the player 
            Math.sin(this.player.rotation - Math.PI / 2) * 10, //
            this.player.rotation, // rotation of the sprite
            this.player.x, //starting position of the laser
            this.player.y, //
            this.context) //this
        )

        this.gameController.clearArray(this.laserContainer);

    }

}


