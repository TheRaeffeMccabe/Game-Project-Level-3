class Player {

    constructor(PLAYER_IMG, x, y, h, w, xSpeed, ySpeed) {

        this.x = x;

        this.y = y;

        this.w = w;

        this.h = h;

        this.xSpeed = xSpeed;

        this.ySpeed = ySpeed;



        PLAYER_IMG = new Image();

        PLAYER_IMG.src = 'images/RainbowStar.png';

        this.src = PLAYER_IMG;

    }//basic creation of the player



    draw() {

        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);

    } //draws the player on the canvas
}