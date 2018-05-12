// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dict = new Map();
    let maxVal = '';
    let currentMax = 0;
    for (const char of str) {
        let val = 1;
        if (dict.has(char)) {
            val = dict.get(char);
            dict.set(char, ++val);
        } else {
            dict.set(char, val);
        }
        if (val > currentMax) {
            currentMax = dict.get(char);
            maxVal = char;
        }
    } 
    return maxVal;
}

module.exports = maxChar;
