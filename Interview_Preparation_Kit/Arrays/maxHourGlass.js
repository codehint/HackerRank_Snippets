/**
 * Function finds the maximum hour glass sum
 * @param {number[][]} arr 
 */
function hourGlassSum(arr) {
    let maxSum = Number.NEGATIVE_INFINITY;
    if (arr.length < 3) return maxSum;
    for(let rowIndex=0; rowIndex<arr.length-2; rowIndex++) {
        for (let columnIndex = 0; columnIndex < arr[rowIndex].length-2; columnIndex++) {
            let currentSum = arr[rowIndex][columnIndex] + arr[rowIndex][columnIndex+1] + arr[rowIndex][columnIndex+2] + arr[rowIndex+1][columnIndex+1] + arr[rowIndex+2][columnIndex] + arr[rowIndex+2][columnIndex+1] + arr[rowIndex+2][columnIndex+2];
            if (currentSum > maxSum) maxSum = currentSum;
        }
    }
    return maxSum;
}

const twoDArray = [
    [1,2,3,4],
    [3,4,5,6],
    [8,9,1,2]
];
console.log(hourGlassSum(twoDArray));