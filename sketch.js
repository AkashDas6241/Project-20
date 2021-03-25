var  tom1, tom2, tom3, tom4 ;
var  jerry1, jerry2, jerry3, jerry4 ;


function preload() {
    //load the images here
tom1 = loadImage("images/cat1.png");
tom2 = loadImage("images/cat2.png");
tom3 = loadImage("images/cat3.png");
tom4 = loadImage("images/cat4.png");

jerry1 = loadImage("images/mouse1.png");
jerry2 = loadImage("images/mouse2.png");
jerry3 = loadImage("images/mouse3.png");
jerry4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
