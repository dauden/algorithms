// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // return str.split('').reverse().join('') === str;

    let strArray = str.split('');
    let isPalindrome = false;
    for (var i = 0; i <= strArray.length / 2; i++) {
        isPalindrome = strArray[i] === strArray[strArray.length - 1 - i];
        if (!isPalindrome) {
            break;
        }
    }
    return isPalindrome;
}

module.exports = palindrome;
