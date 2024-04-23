const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const color = ['blue', 'green', 'teal', 'magenta', 'cyan', 'yellow'];

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawShape(100,100,150,'#db5461','#102e4a');
    drawShape(200,200,75,'#102e4a','cyan');
    drawShape(350,100,100,'blue','magenta');
    drawShape(200,300,300,'green','teal');

    drawGrid(canvasWidth, canvasHeight);
}

/**
 * Create the drawShape function definition here:
 * The function should draw two concentric circles of different colors.
 * The function should accept the following parameters (in order):
 *      x: the x-coordinate of the center of the circle(s).
 *      y: the y-coordinate of the center of the circle(s).
 *      size: the diameter of the larger circle.
 *      color1: the color of the larger circle.
 *      color2: the color of the smaller circle, which is 1/2 the diameter of the larger circle.
 */

function drawShape(x,y,size,bigColor,smallColor) {
    fill(bigColor);
    circle(x,y,size);
    fill(smallColor);
    circle(x,y,size/2);
}