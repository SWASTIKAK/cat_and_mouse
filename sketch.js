var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;
var bgImg;

function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(850,600,100,100);
    cat.addImage(catImg1);
    cat.scale = 0.18;
    cat.setCollider("rectangle",0,0,600,600);

    mouse = createSprite(100,600,100,100);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.18;
    mouse.setCollider("rectangle",0,0,600,600);
}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width + mouse.width)/ 2 ){

    cat.velocityX = 0 ;
    cat.addAnimation("happyCat",catImg3);
    cat.changeAnimation("happyCat");

    mouse.addAnimation("happyMouse",mouseImg3);
    mouse.changeAnimation("happyMouse");

  }

    drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){

    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -3;
}


}
