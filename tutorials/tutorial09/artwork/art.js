const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2); // how many redraws per second

    // fill("#08415c");

    // generate a random x-position, y-position, and size:
    

    // Draw a random circle:
    

    // counter = 0;
    // while (counter < 500) {
    //     let x = randomInt(canvasWidth/2, canvasWidth);
    //     let y = randomInt(0, canvasHeight/2);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter += 1;
    // }
    
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter = 0;
    while (counter < 900) {
        noStroke();
        let color = colors[randomInt(0,4)];
        // opacity(0.5);
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(10, 150);
        circle(x, y, size);
        counter += 1;
    }
}
