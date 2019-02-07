
class Player {
    constructor(contex) {

        var player = contex.add.sprite(W / 2 , H / 2, 'Player');

        this.angle = player.rotation;
        this.rotationSpeed = 0.1;
        this.speed = 2;

        this.cursors = contex.input.keyboard.createCursorKeys();

    }

    move() {
        if (this.cursors.up.isDown) {
            //Move the player forward

            player.x += this.speed

        }
        if (this.cursors.down.isDown) {

            //Move the player backwards

        }
        if (this.cursors.left.isDown) {

            //Rotate the player left
            player.angle += this.rotationSpeed;

        }
        if (this.cursors.right.isDown) {

            //Rotate the player right

        }
    }

}