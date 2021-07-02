var BackGround,BackGroundImg
var Mouse, MouseImg, Mouse1,Mouse2
var Cat, CatImg,Cat1,Cat2




function preload() {
    //load the images here
BackGroundImg = loadImage("images/garden.png")

MouseImg = loadAnimation("images/mouse1.png")
Mouse1 = loadAnimation("images/mouse2.png","images/mouse3.png")
Mouse2= loadAnimation("images/mouse4.png")

CatImg = loadAnimation ("images/cat1.png")
Cat1 = loadAnimation("images/cat2.png","images/cat3.png")
Cat2 = loadAnimation("images/cat4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

     Mouse = createSprite (200,600);
     Mouse.addAnimation ("mouse",MouseImg)
     Mouse.scale = 0.15

     Cat = createSprite (870,600);
     Cat.addAnimation ("cat",CatImg)
      Cat.scale = 0.2
}

function draw() {


    background(BackGroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(Cat.x-Mouse.x<(Cat.width-Mouse.width)/2){
      Cat.VelocityX = 0
      Mouse.addAnimation("mousetwo",Mouse2)
      Cat.addAnimation("cattwo",Cat2)

      Mouse.scale = 0.15
      Cat.scale = 0.2

    }

    drawSprites();
}


function keyPressed(){
 
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
  Cat.VelocityX = -5
  Cat.addAnimation("catone",Cat1)
  



}

}
