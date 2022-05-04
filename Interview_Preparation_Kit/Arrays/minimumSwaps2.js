// HackerRank Problem Link
// https://www.hackerrank.com/challenges/minimum-swaps-2

/**
 * Returns the minimum number of swaps to convert the array order to ascending.
 * @param {number[]} arr 
 * @returns {number}
 */
function minimumSwaps(arr) {
    let i = 0;
    let totalSwaps = 0;
    while(i<arr.length) {
        if (arr[i] === (i+1)) {
            i += 1;
            continue;   
        }
        const indexToSwapWith = arr[i]-1;
        [arr[i], arr[indexToSwapWith]] = [arr[indexToSwapWith], arr[i]];
        totalSwaps += 1;
        if (arr[i] === i+1) i += 1;
    }
    return totalSwaps;
}