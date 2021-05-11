/**
 * This function count all pairs of integers in the array.
 * The implementation uses Javascript SET.
 * @param {number} n 
 * @param {number[]} ar 
 */
function sockMerchant(n, ar) {
    let totalSockPairs = 0;
    if (ar.length === 0) return totalSockPairs;

    const socksSet = new Set();
    ar.forEach(value => {
        if (socksSet.has(value)) {
            totalSockPairs += 1;
            socksSet.delete(value);
        } else {
            socksSet.add(value);
        }
    });

    return totalSockPairs;
}


const totalPairs = sockMerchant(7, [1,1,2,2,3,3,4]);
console.log(totalPairs);