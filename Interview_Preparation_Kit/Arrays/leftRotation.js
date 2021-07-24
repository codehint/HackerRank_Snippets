/**
 * This function rotates the element of the array by given number
 * of steps
 * @param {number[]} a 
 * @param {number} d 
 * @returns {number[]} Final array after performing rotation
 * 
 * Complexity Analysis
 * Time - O(n)
 * Space - O(n)
 */
function rotLeft(a, d) {
    const arrayLength = a.length;
    const finalArray = new Array(arrayLength);
    a.forEach((element, index) => {
        const newIndex = (index + (arrayLength - d)) % arrayLength;
        finalArray[newIndex] = element
    })
    return finalArray;
}

console.log(rotLeft([1,2,3,4,5], 4));