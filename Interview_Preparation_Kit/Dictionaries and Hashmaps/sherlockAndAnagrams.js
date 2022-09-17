// HackerRank Problem Link
// https://www.hackerrank.com/challenges/sherlock-and-anagrams

/**
 * Returns a map containing the sorted substring as the key
 * and its frequency in the original string as the value
 * @param {string} inputString
 * @returns {Map}
 */
function getSubStringsMap(inputString) {
    const inputStringLength = inputString.length;
    let map = new Map();
    for(let i=0; i<inputStringLength; i++) {
        let substring = ''
        for(let j=i; j<inputStringLength; j++) {
            substring = (substring + inputString[j]).split('').sort().join('')
            if(map.has(substring))
                map.set(substring ,map.get(substring)+1)
            else map.set(substring, 1)
        }
    }
    return map
}


/**
 * Return all possible substring anagrams in the given string.
 * @param {string} inputString
 * @returns {number}
 */
function sherlockAndAnagrams(inputString) {
    const subStringsMap = getSubStringsMap(inputString);

    let totalAnagrams = 0
    for (let value of subStringsMap.values()) {
        totalAnagrams += Math.floor((value * (value - 1))/2)
    }

    return totalAnagrams;
}


console.log(sherlockAndAnagrams("kkkk"));