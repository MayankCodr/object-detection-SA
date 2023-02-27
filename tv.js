img = "";
function preload(){
    img = loadImage("tv.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();


}


function draw(){
    image(img, 0, 0, 640, 400);
    fill("yellow");
    text("TV", 190, 100);
    noFill();
    stroke("red");
    rect(180, 90, 280, 150);
    noStroke();
    fill("red");
    text("Tree", 60, 140);
    noFill();
    stroke("red");
    rect(50, 130, 90, 250);
    fill("red");
    text("Tree", 535, 290);
    noFill();
    stroke("red");
    rect(525, 280, 90, 100);   

}