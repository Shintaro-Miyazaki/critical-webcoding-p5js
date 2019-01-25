let cnv;
let dataCollection = false;
let showCollectedData = false;
let mousePos = {};

let data = [];
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5sketch') // take canvas and link to div element p5sketch
    // console.log(data);
    // data.push(10); // daten eingeben
}
function draw() {
    background(0, 255, 255);
    if (dataCollection == true) {
        mousePos = {
            x: mouseX,
            y: mouseY
        }
        data.push(mousePos);
        console.log(data)
    }
    //show data
    if(showCollectedData == true){
        beginShape();
        for(let i = 0; i < data.length; i++){
            let x = data[i].x;
            let y = data[i].y;
            vertex(x, y);
        }
        noFill();
        stroke(255, 0, 0); 
        strokeWeight(10);
        endShape();
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight); // resize when browser windows is resized
}
/**Event Listener for Button (DOM)*/
let trigger = document.getElementById('trigger'); //speichert Element als variable.
console.log(trigger);
trigger.addEventListener('click', triggerFunction);

function triggerFunction(event) {
    console.log('trigger event...');
    if(showCollectedData == true){
        showCollectedData = false;
    }
    data = []; // lösche den data array jedes Mal, sonst wird alles überschrieben
    dataCollection = true;
}

const release = document.getElementById('release'); //speichert Element als variable.
console.log(release);
release.addEventListener('click', releaseFunction);

function releaseFunction(event) {
    console.log('release event...');
    dataCollection = false;
    showCollectedData = true;

}
