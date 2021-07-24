/**
 * 
 * @param {string} s 
 * @param {number} n 
 */
function repeatedString(s, n) {
    let totalAs = 0;
    if (!s) return totalAs;
    const CHAR_a = 'a';
    let totalAsInGivenString = 0;
    for(let index=0; index<s.length; index+=1) {
        if (s.charAt(index) === CHAR_a) totalAsInGivenString+=1;
    }

    totalAs = totalAsInGivenString * Math.floor(n/s.length);

    for (let index=0; index< n%s.length; index+=1) {
        if (s.charAt(index) === CHAR_a) totalAs += 1;
    }

    return totalAs;
}

console.log(repeatedString('bcdefa', 10));
