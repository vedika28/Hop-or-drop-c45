
var block1Img, block2Img, block1, block2;
var bgImg, bg;
var player, playerAnm;
var enemy1, enemy2, enemy;
var plank;
var block = [];
var blockGroup

function preload() {
  block1Img = loadImage("images/block1.jpg");
  block2Img = loadImage("images/block2.jpg");
  bgImg = loadImage("images/bg.jpg");
  enemy1 = loadImage("images/rock1.png");
  enemy2 = loadImage("images/rock2.png");
  playerAnm = loadAnimation("images/cat1.png", "images/cat2.png"
    , "images/cat3.png", "images/cat4.png", "images/cat5.png",
    "images/cat6.png", "images/cat7.png", "images/cat8.png");
}

function setup() {
  createCanvas(1000, 500);

  bg = createSprite((width / 2) + 50, (height / 2) + 140, width, height);
  bg.addImage(bgImg);
  bg.scale = 2.5;

  player = new Player(100, 200, 20, 20);

  plank = new Block(100, 250);

  blockGroup = new Group();
}

function draw() {
  background(0);

  var rand = random(100, 300);
  if (frameCount % 50 === 0) {
    block.push(new Block(width + 20, rand));
  }

  if (block.length > 0) {
    for (var i = 0; i < block.length; i++) {
      block[i].behaviour();
      blockGroup.add(block[i].body);

      console.log(plank.body.y - player.body.y);

      if (player.body.y < block[i].body.y) {
        if (block[i].body.y - player.body.y <= 10) {
          block[i].body.collide(player.body);
        }
      }
    }
  }

  var rand3 = random(100, 250)
  if (frameCount % 400 === 0) {
    enemy = new Enemy(rand3, -20);
  }

  //console.log(bg.x);
  bg.velocityX = -3;
  if (bg.x < 200) {
    bg.x = width / 2;
  }

  player.behaviour();
  player.body.collide(plank.body);

  drawSprites();

  text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);
  //console.log(plank.body.y);
}