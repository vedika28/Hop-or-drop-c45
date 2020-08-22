class Player {

    constructor(x, y, w, h) {

        this.body = createSprite(x, y, w, h);
        this.body.addAnimation("walking", playerAnm);
        this.body.debug=true;
        this.body.setCollider("rectangle",0,0,40,70);
    }

    behaviour() {
        if (keyDown("UP_ARROW")) {
            this.body.velocityY = -10;
        }
        this.body.velocityY += 1;
    }

    shield() {
        if (keyDown("space")) {

        }
    }

}