class Player {

    constructor(PLAYER_IMG, x, y, h, w, playerXspeed, playerYspeed) {
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.playerXspeed = playerXspeed;
        this.playerYspeed = playerYspeed;

        PLAYER_IMG = new Image();
        PLAYER_IMG.src = 'Images/SpaceShip.png';
        this.src = PLAYER_IMG;

    }//basic creation of the player



    draw() {

        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);

    } //draws the player on the canvas
}


playerMove()

    {

    if (leftKeyPress){
        playerXpos -= playerXspeed;
    }

    if (rightKeyPress){
        playerXpos += playerXspeed;
    }

    if (upKeyPress){
        playerYpos -= playerYspeed;
    }
    
    if (leftKeyPress){
        playerYpos += playerYspeed;
    }

    if (enterKeyPress){
        pass = true;
    }

    }// End Function