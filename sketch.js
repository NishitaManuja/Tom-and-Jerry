var garden, cat, mouse;
var catImage1, catImage2, catImage3, mouseImage1, mouseImage2, mouseImage3;

function preload() {
    //load the images here


    garden = loadImage("./images/garden.png");
    catImage1 = loadAnimation("./images/cat1.png");
    catImage2 = loadAnimation("./images/cat2.png", "./images/cat3.png");
    catImage3 = loadAnimation("./images/cat4.png");
    mouseImage1 = loadAnimation("./images/mouse1.png");
    mouseImage2 = loadAnimation("./images/mouse2.png", "./images/mouse3.png");
    mouseImage3 = loadAnimation("./images/mouse4.png");
}

function setup() {
    //addAnimation ("label", imageVariable)
    createCanvas(1000, 800);

    cat = createSprite(700, 500);
    cat.addAnimation("cat", catImage1);
    cat.scale = 0.2;

    mouse = createSprite(300, 500);
    mouse.scale = 0.2;

    mouse.addAnimation("mouse", mouseImage1);
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        console.log("collided");
        cat.addAnimation("cathappy", catImage3);
        cat.changeAnimation("cathappy", catImage3);
        cat.frameDelay = 25;
        mouse.addAnimation("mousehappy", mouseImage3);
        mouse.addAnimation("mousehappy", mouseImage3);
        mouse.frameDelay = 25;
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseteasing", mouseImage2);
        mouse.changeAnimation("mouseteasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catmoving", catImage2);
        cat.changeAnimation("catmoving");
        cat.x = cat.x - 10;
        cat.frameDelay = 25;
    }


}
