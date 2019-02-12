
class Laser{
    constructor(dirX , dirY , rotation,posX, posY, contex){

        this.laser = contex.physics.add.image(posX, posY, 'laserSprite');
        
        this.laser.rotation = rotation;

        this.laser.setVelocityX(dirX * 50 );
        this.laser.setVelocityY(dirY * 50 );
    }
}