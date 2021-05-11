/**
 * @param {number} steps 
 * @param {string} path 
 * @returns {number} total valleys in the path
 */
function countingValleys(steps, path) {
    let totalValleys = 0;
    if (!path) return 0;

    let stepsMovedUp = 0;
    let stepsMovedDown = 0;
    for(let currentIndex=0; currentIndex<steps; currentIndex+=1) {
        const currentChar = path.charAt(currentIndex);
        if (currentChar === 'U') stepsMovedUp += 1;
        if (currentChar === 'D') stepsMovedDown += 1;
        if (stepsMovedUp && stepsMovedDown && stepsMovedUp === stepsMovedDown) {
            stepsMovedUp = stepsMovedDown = 0;

            if (currentChar === 'U') totalValleys += 1;
        }
    }

    return totalValleys;
}


const path = "UDDDUUDDDUDUUU";
const steps = path.length;
const totalValleys = countingValleys(steps, path);
console.log(totalValleys);