img = "";
function preload(){
    img = loadImage("laptop_phone1.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();


}


function draw(){
    image(img, 0, 0, 640, 400);
    fill("yellow");
    text("Laptop", 10, 100);
    noFill();
    stroke("red");
    rect(0, 0, 350, 250);
    noStroke();
    fill("yellow");
    text("Phone", 210, 260);
    noFill();
    stroke("red");
    rect(200, 250, 110, 150);
    fill("blue");
    text("Tablet", 320, 160);
    noFill();
    stroke("red");
    rect(310, 150, 280, 240);

}