function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    fill("teal");
    triangle(550, 300, 650, 250, 600, 150);

    fill("teal");
    triangle(750, 300, 650, 250, 700, 150);

    

    // https://p5js.org/reference/#/p5/circle
    fill("teal");
    circle(650, 300, 200);

    fill("black");
    circle(600, 280, 20);
    circle(700, 280, 20);

    strokeWeight(5);
    line(600, 350, 700, 350);

    fill("pink");
    triangle(625, 310, 675, 310, 650, 330)

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    fill("black");
    text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}