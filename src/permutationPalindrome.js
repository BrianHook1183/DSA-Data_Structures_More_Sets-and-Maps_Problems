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
      if (wordMap.has(letter)) {
        const count = wordMap.get(letter);
        wordMap.set(letter, count + 1);
      } else {
        wordMap.set(letter, 1);
      }
    });
    return wordMap;
  };
  // end of anagramMap() helper function

  // console.log("word", word);
  // console.log(anagramMap(word));
}

module.exports = permutationPalindrome;
