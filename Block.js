class Block {

    constructor(x, y) {
        this.body = createSprite(x, y, 10, 5);
        this.body.addImage(block1Img);
        this.body.scale = 0.3;
        this.body.debug=true;
        //this.body.setCollider("rectangle",0,0,50,20);
    }

    behaviour() {
        this.body.velocityX = -9;
        //console.log(this.body.x);
       if (this.body.x<-5) {
           this.body.lifetime=0;
       }
    }



}