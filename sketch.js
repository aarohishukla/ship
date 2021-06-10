
function preload(){
seaimg = loadImage("sea.png");
shipImg = loadAnimation(ship1.png,ship2.png,ship3.png,ship4.png);
ship.addAnimation(ship1.png);
}

function setup(){
  createCanvas(400,400);
sea.addImage(seaImg);
  if(sea.x<0){
    sea.x = sea.width/2;
  }
}

function draw() {
  background("blue");
 drawsprites();
}