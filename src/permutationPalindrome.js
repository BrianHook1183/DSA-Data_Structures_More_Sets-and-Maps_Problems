/* 
Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.
*/

/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  // Helper function [modified from "Are 2 strings Anagrams?"]
  const anagramMap = (word) => {
    const wordMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");

    wordLowerArray.forEach((letter) => {
      // if (wordMap.has(letter)) {
        const count = wordMap.get(letter);
        wordMap.set(letter, count ? count + 1 : 1);
      // } 
      // else {
      //   wordMap.set(letter, 1);
      // }
    });
    return wordMap;
  };
  // end of anagramMap() helper function
  const wordMap = anagramMap(word);
  console.log("word", word);
  console.log("wordMap", wordMap);
}

module.exports = permutationPalindrome;
