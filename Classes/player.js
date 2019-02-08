
class Player {
    constructor(contex) {

        this.player = contex.add.sprite(W / 2 , H / 2, 'PlayerSprite');

        this.rotationSpeed = 0.1;
        this.speed = 2;
        this.context = contex;

        this.cursors = contex.input.keyboard.createCursorKeys();

        
    }

    move() {

        if (this.cursors.up.isDown) {
            //Move the player forward
            
            this.player.x += Math.cos(this.player.rotation - Math.PI/2) * 10;
            this.player.y += Math.sin(this.player.rotation - Math.PI/2) * 10;

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

    shoot(){

        this.laser = context.add.image(this.player.x, this.player.y, 'laserSprite');
        
        this.laser.x += Math.cos(this.player.rotation - Math.PI/2) * 10
        this.laser.y += Math.sin(this.player.rotation - Math.PI/2) * 10
    }

}