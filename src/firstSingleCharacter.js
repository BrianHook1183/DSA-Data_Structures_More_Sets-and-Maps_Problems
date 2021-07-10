/* 
Given a string, find the first character in that string that occurs only once. For example, given the string "thinkful" return the character "t" since that is the first character in the string that is not repeated in the string.

Given the string "character" return "h" because the first character "c" is repeated later in the string so the first non-repeating character is "h".
*/

/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  if (!word.length) return null;

  // Helper function [modified from "Are 2 strings Anagrams?"]
  const anagramMap = (word) => {
    // console.log("word", word);
    const wordMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");
    // console.log("wordLowerArray", wordLowerArray);

    wordLowerArray.forEach((letter) => {
      if (wordMap.has(letter)) {
        const count = wordMap.get(letter);
        wordMap.set(letter, count + 1);
      } else {
        wordMap.set(letter, 1);
      }
    });
    // console.log("wordMap", wordMap);
    return wordMap;
  };
  // end of anagramMap() helper function

  const wordMap = anagramMap(word);
  const lettersArray = word.toLowerCase().split("");

  for (let letter of lettersArray) {
    if (wordMap.has(letter)) {
      if (wordMap.get(letter) === 1) {
        return letter;
      }
    }
  }
  return null;
}

module.exports = firstSingleCharacter;
