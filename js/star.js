import { rand, mapValue, WIDTH, HEIGHT } from './utils.js'

class Star {

    constructor(ctx) {
        this.ctx = ctx;

        this.x = rand(-WIDTH/2, WIDTH/2);
        this.y = rand(-HEIGHT/2, HEIGHT/2);
        this.z = rand(WIDTH, WIDTH * 2);

        this.pz = this.z;
    }

    /**
     * Create new position for the star
     */
    reset() {
        const newStar = new Star(this.ctx);

        this.x = newStar.x;
        this.y = newStar.y;
        this.z = newStar.z;

        this.pz = this.z;
    }

    /**
     * Update the star position
     */
    update() {
        this.ctx.clearRect(-WIDTH/2, -HEIGHT/2, WIDTH, HEIGHT);

        // Save the second to last z
        if (this.pz - this.z > 20) {
            this.pz = this.z;
        }

        this.z -= 10;

        // Reset star position when its z reaches edge
        if (this.z <= 0) {
            this.reset();
        }

    }

    /**
     * Draw the star
     */
    draw() {
        // Calculate x and y shift
        const dx = mapValue((this.x / this.z), 0, 1, 0, WIDTH);
        const dy = mapValue((this.y / this.z), 0, 1, 0, WIDTH);

        // Draw the star
        this.ctx.beginPath();
        this.ctx.ellipse(dx, dy,
            mapValue(this.z, 0, WIDTH * 2, 2, 0),
            mapValue(this.z, 0, WIDTH * 2, 2, 0),
            360, 0, 2*Math.PI, false);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        // Calculate previous x and y based on previous z
        const px = mapValue((this.x / this.pz), 0, 1, 0, WIDTH);
        const py = mapValue((this.y / this.pz), 0, 1, 0, WIDTH);

        // Draw the star's trail
        this.ctx.beginPath();
        this.ctx.moveTo(px, py);
        this.ctx.lineTo(dx, dy);
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
    }
}

export default Star;
