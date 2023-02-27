img = "";
function preload(){
    img = loadImage("bottle.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();


}


function draw(){
    image(img, 0, 0, 640, 400);
    fill("yellow");
    text("Bottle", 160, 110);
    noFill();
    stroke("red");
    rect(150, 100, 320, 220);

   

}