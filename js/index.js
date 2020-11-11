import Star from './star.js'
import { WIDTH, HEIGHT, MAX_STARS } from './utils.js'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let stars = new Array(MAX_STARS);

/**
 * Sets up the canvas and instantiates the stars
 */
function setup() {
    // Set canvas width and height (default are 800x600)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Translates the canvas' origin to the center of the screen
    ctx.translate(WIDTH/2, HEIGHT/2);

    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Star(ctx);
    }
}

/**
 * Updates all the stars
 */
function update() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
    }
}

/**
 * Draws all the stars
 */
function draw() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
    }
}

/**
 * Runs the frame update loop
 */
function run() {
    update();
    draw();
    window.requestAnimationFrame(run);
}

setup();
run();

