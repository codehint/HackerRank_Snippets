// HackerRank Problem Link
// https://www.hackerrank.com/challenges/two-strings


function twoStrings(s1, s2) {
    const shorterString = s1.length > s2.length? s2: s1;
    const biggerString = s1.length > s2.length? s1: s2

    for(let index=0; index < shorterString.length; index += 1 ) {
        const charAtIndex = shorterString[index];
        if (biggerString.includes(charAtIndex)) return "YES"
    }

    return "NO"
}

console.log(twoStrings("two", "four"));