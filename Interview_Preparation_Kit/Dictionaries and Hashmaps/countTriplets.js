// HackerRank Problem Link
// https://www.hackerrank.com/challenges/count-triplets-1

/**
 * Returns the total number of triples making a geometric
 * progression as per given common ratio.
 * @param {number[]} inputArray
 * @param {number} ratio
 * @returns {number}
 */
function countTriplets(inputArray, ratio) {
    let totalTriplets = 0;
    const rightDict = arrayToFrequencyMap(inputArray);
    const leftDict = {};

    for (let index=0; index<inputArray.length; index+=1) {
        const currentElement = inputArray[index];
        const nextElement = currentElement*ratio;
        const previousElement = currentElement/ratio;
        findAndDecrement(rightDict, currentElement);
        if (
            currentElement % ratio === 0,
            leftDict[previousElement] &&
            rightDict[nextElement]
        ) {
            totalTriplets += leftDict[previousElement] * rightDict[nextElement]
        }
        findAndIncrement(leftDict, currentElement);
    }

    return totalTriplets

}

/**
 * Finds and decrements the given element from the given
 * dictionary.
 * @param {Object} dict 
 * @param {number} element  
 */
function findAndDecrement(dict, element) {
    if (!dict[element]) return;
    dict[element] -= 1;
    if (dict[element] === 0) delete dict[element];
    return;
}

/**
 * Finds/add and increment the given element from the given
 * dictionary.
 * @param {Object} dict 
 * @param {number} element  
 */
function findAndIncrement(dict, element) {
    if (!dict[element]) dict[element] = 0;
    dict[element] += 1;
    return;
}

/**
 * Returns a dictionary specifying the frequency of 
 * each element in the array.
 * @param {number[]} inputArray
 * @returns {Object}
 */
function arrayToFrequencyMap(inputArray) {
    const dict = {};
    inputArray.forEach(element => {
        if (!dict[element]) dict[element] = 0;
        dict[element] += 1;
    });
    return dict;
}

console.log(countTriplets([1,3,3,9,9], 3));