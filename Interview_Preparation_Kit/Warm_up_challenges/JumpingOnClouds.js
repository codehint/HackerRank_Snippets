/**
 * The function solves the jumping on the clouds puzzle.
 * @param {number[]} c 
 * @returns {number} minimum jumps required
 */
function jumpingOnClouds(c) {
    let minimumJumpsRequired = 0;
    if (!c || c.length === 0) return minimumJumpsRequired;
    let currentIndex = 0;
    while (currentIndex + 1 < c.length) {
        if (currentIndex + 2 < c.length &&  c[currentIndex + 2] === 0) {
            minimumJumpsRequired += 1;
            currentIndex += 2;
            continue;
        }
        if (c[currentIndex + 1] === 0) {
            currentIndex += 1;
            minimumJumpsRequired += 1;
        }
    }
    return minimumJumpsRequired
}

console.log(jumpingOnClouds([0,0,1,0,0,0,0]));