let cnv; 
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5sketch') // take canvas and link to div element p5sketch
}
function draw() {
    background(0, 255, 255);
}

function windowResized(){
resizeCanvas(innerWidth, innerHeight); // resize when browser windows is resized
}