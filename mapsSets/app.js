// new Set([1,1,2,2,3,4])
// returns {1,2,3,4}

//[...new Set("referee")].join("")
// returns "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Map(2) {Array(3) => true, Array(3) => false}

function hasDuplicate(arr) {
    let set = new Set(arr);

    if (set.size != arr.length) {
        return true;
    }
    return false;
}

// Write a function called vowelCount 
// which accepts a string and returns a map where the 
// keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    let vowelMap = new Map();
    const vowelList = 'aeiouAEIOU';

    for (let char of str) {

        if (vowelList.includes(char)) {

            if (vowelMap.has(char)) {
                vowelMap.set(char,vowelMap.get(char) + 1);
            }
            
            else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}