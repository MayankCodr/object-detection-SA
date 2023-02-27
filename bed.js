img = "";
function preload(){
    img = loadImage("bed.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();


}


function draw(){
    image(img, 0, 0, 640, 400);
    fill("red");
    text("Bed", 110, 210);
    noFill();
    stroke("red");
    rect(100, 190, 370, 200);

   

}