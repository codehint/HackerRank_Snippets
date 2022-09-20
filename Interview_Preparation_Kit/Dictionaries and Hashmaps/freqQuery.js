// HackerRank Problem Link
// https://www.hackerrank.com/challenges/frequency-queries

const OPERATION = {
    INSERT: 1,
    DELETE: 2,
    FIND: 3
}

const RESULT = {
    FOUND: 1,
    NOT_FOUND: 0
}

/**
 * Returns an array for the result of find queries
 * @param {number[][]} queries 
 */
function freqQuery(queries) {
    const result = [];
    const valueToFrequencyCache = {};
    const frequencyToTotalCount = {}
    const { INSERT, DELETE, FIND } = OPERATION;
    const { FOUND, NOT_FOUND } = RESULT;
    queries.forEach(([operation, value]) => {
        switch (operation) {
            case INSERT:
                insertValue(value);
                break;
            case DELETE:
                deleteValue(value);
                break;
            case FIND:
                result.push(findFrequency(value)? FOUND: NOT_FOUND);
                break;
            default:
                break;
        }
    })

    function insertValue(value) {

        const frequency = valueToFrequencyCache[value];
        if (frequency > 0 && frequencyToTotalCount[frequency] > 0) {
            frequencyToTotalCount[frequency] -= 1;
        }

        let newFrequency = frequency? frequency + 1: 1;
        valueToFrequencyCache[value] = newFrequency;

        if (frequencyToTotalCount[newFrequency]) {
            frequencyToTotalCount[newFrequency] += 1;
        } else {
            frequencyToTotalCount[newFrequency] = 1;
        }
    }
    
    function deleteValue(value) {
        const frequency = valueToFrequencyCache[value];
        if (frequency > 0) {
            if (frequencyToTotalCount[frequency] > 0) frequencyToTotalCount[frequency] -= 1;

            let newFrequency = frequency - 1;
            valueToFrequencyCache[value] = newFrequency;

            if (frequencyToTotalCount[newFrequency]) {
                frequencyToTotalCount[newFrequency] += 1;
            } else {
                frequencyToTotalCount[newFrequency] = 1;
            }
        }

    }

    function findFrequency(frequencyToFind) {
        return !!frequencyToTotalCount[frequencyToFind];
    }

    return result;
}




freqQuery([
    [1,2],
    [1,2],
    [3,2]
])