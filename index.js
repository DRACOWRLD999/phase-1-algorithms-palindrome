function isPalindrome(word) {
  // Convert the word to lowercase and remove any non-alphanumeric characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned word is equal to its reverse
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  1. Define a function called isPalindrome that takes a single parameter, word.
2. Convert the word to lowercase using the toLowerCase() method and store the result in a variable called cleanedWord.
3. Remove any non-alphanumeric characters from cleanedWord using a regular expression and the replace() method. Store the result back in cleanedWord.
4. Reverse the characters in cleanedWord using the split(), reverse(), and join() methods, and store the result in a variable called reversedWord.
5. Check if cleanedWord is equal to reversedWord.
6. If they are equal, return true; otherwise, return false. 
*/

/*
  Add written explanation of your solution here

  The function first converts the word to lowercase and removes any non-alphanumeric characters.
  Then it reverses the cleaned word and checks if it is equal to the original cleaned word.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
