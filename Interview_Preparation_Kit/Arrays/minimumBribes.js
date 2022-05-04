// HackerRank Problem Link
// https://www.hackerrank.com/challenges/new-year-chaos/

/**
 * Finds the minimum bribes required to reach at the current
 * array order.
 * @param { number[] } q 
 * @returns { void }
 */
function minimumBribes(q) {
    let tooChaotic = false;
    const bribeRecord = {};
    
    for (let i=1; i<q.length; i+=1) {
        if (q[i] < q[i-1]) {
            
            // Increment the bribe count of element at 'q[i-1]'
            bribeRecord[q[i-1]] = bribeRecord[q[i-1]]? bribeRecord[q[i-1]]+1: 1;
            
            // Check if bribe count exceeded maximum allowed bribes i.e 2
            if(isTooChaotic(bribeRecord[q[i-1]])) {
                console.log("Too chaotic");
                tooChaotic = true;
                break;
            }

            // Swap elements
            [q[i], q[i-1]] = [q[i-1], q[i]];

            for (let j=i-1; j>0; j-=1) {
                if (q[j] < q[j-1]) {
                    bribeRecord[q[j-1]] = bribeRecord[q[j-1]]? bribeRecord[q[j-1]]+1: 1;
                    [q[j], q[j-1]] = [q[j-1], q[j]]
                } else break;
            }
        }
    };
    
    if (!tooChaotic) {
        const totalBribes = Object.values(bribeRecord).reduce((partialSum, current) => partialSum + current, 0);
        console.log(totalBribes)
    }
}

function isTooChaotic(bribeCount) {
    return bribeCount>2
}