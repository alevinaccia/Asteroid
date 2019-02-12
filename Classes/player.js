
class Player {
    constructor(contex) {

        this.player = contex.physics.add.sprite(glb.W / 2, glb.H / 2, 'PlayerSprite');

        this.rotationSpeed = 0.1;
        this.speed = 2;
        this.context = contex;
        this.laserContainer = [];
        this.laser;
        this.gameController = new controller;
        this.fristShot = true;

        //Physics
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.set(0.5);


        this.cursors = contex.input.keyboard.createCursorKeys();


    }

    move() {

        if (this.cursors.up.isDown) {
            //Move the player forward 

            this.player.setAcceleration(Math.cos(this.player.rotation - Math.PI / 2) * 60, Math.sin(this.player.rotation - Math.PI / 2) * 60);

        } else {
            this.player.setAcceleration(0, 0);
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

    }

}


