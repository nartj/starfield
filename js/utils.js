export const WIDTH = screen.width;
export const HEIGHT = screen.height;
export const MAX_STARS = 400;

/**
 * Maps a value from an initial number scale to a target number scale
 * @param a the number belonging to the initial number scale
 * @param a0 the minimum of the initial number scale
 * @param a1 the maximum of the initial number scale
 * @param b0 the minimum of the target number scale
 * @param b1 the maximum of the target number scale
 * @returns the target number
 */
export function mapValue(a, a0, a1, b0, b1) {
    return b0 + (b1 - b0) * ((a - a0) / (a1 - a0));
}

/**
 * Generates a random value between a minimum and a maximum
 * @param min
 * @param max
 * @returns {number}
 */
export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


