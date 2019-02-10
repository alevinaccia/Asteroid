
class Laser{
    constructor(dirX , dirY , rotation,posX, posY, contex){
        console.log("dirX : ", dirX, "dirY :  ",  dirY, " ", "rotation : " ,rotation);

        this.laser = contex.physics.add.image(posX, posY, 'laserSprite');
        
        this.laser.rotation = rotation;

        this.laser.setVelocityX(dirX * 10 );
        this.laser.setVelocityY(dirY * 10 );
    }
}