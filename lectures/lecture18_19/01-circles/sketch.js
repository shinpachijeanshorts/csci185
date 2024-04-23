function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let counter = 0;
    let y = 0;
    let width = 0;
    while (counter < 200) {
        circle(800, y, width);
        // circle(400, y, width);
        // circle(1200, y, width);
        y += 5;
        width += 2;


        counter += 1;
    }
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
