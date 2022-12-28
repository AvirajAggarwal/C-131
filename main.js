dog_cat=""

function preload ()
{
dog_cat=loadImage("dog_cat.jpg");
}
function draw()
{
image(dog_cat,0,0,640,420);

fill("blue");
noFill();
text("dog",45,75);
stroke("blue");
rect(30,60,450,350);
}
function setup()
{
canvas=createCanvas(640,420);
canvas.center();
}
