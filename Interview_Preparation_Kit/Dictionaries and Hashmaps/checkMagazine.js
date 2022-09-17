// HackerRank Problem Link
// https://www.hackerrank.com/challenges/ctci-ransom-note


const POSSIBLE_OUTPUTS = {
    YES: "Yes",
    NO: "No"
}

/**
 * Checks if the provided note was made with the
 * words present in the magazine
 * @param { string [] } magazine 
 * @param { string[] } note 
 */
function checkMagazine(magazine, note) {
    if (magazine.length === 0 || note.length === 0) console.log(POSSIBLE_OUTPUTS.NO);;

    const magazineDictionary = convertToMap(magazine);
    for(word of note) {
        if (!magazineDictionary[word] || magazineDictionary[word] <= 0) {
            console.log(POSSIBLE_OUTPUTS.NO);
            return;
        }

        if (magazineDictionary[word]) {
            magazineDictionary[word] -= 1;
        }
    }

    console.log(POSSIBLE_OUTPUTS.YES);
}

/**
 * Returns a dictionary from the provided words
 * @param {string[]} words 
 */
function convertToMap(words) {
    const dictionary = {};

    words.forEach((word) => {
        if (!dictionary[word]) dictionary[word] = 0;
        dictionary[word] += 1;
    });

    return dictionary;
}


checkMagazine("two times three is not four".split(" "), "two times two is four".split(" "))