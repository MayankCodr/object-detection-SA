img = "";
function preload(){
    img = loadImage("sofa.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();


}


function draw(){
    image(img, 0, 0, 640, 400);
    fill("yellow");
    text("Sofa", 160, 200);
    noFill();
    stroke("red");
    rect(150, 190, 350, 200);
    noStroke();
    fill("yellow");
    text("Lamp", 30, 190);
    noFill();
    stroke("red");
    rect(20, 180, 50, 150);
   

}