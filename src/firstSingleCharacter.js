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

  // Helper function
  const createLetterMap = (word) => {
    const letterMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");

    wordLowerArray.forEach((letter) => {
      const count = letterMap.get(letter);
      letterMap.set(letter, count ? count + 1 : 1);
    });
    return letterMap;
  };
  // end of createLetterMap() helper function

  const letterMap = createLetterMap(word);
  const lettersArray = word.toLowerCase().split("");

  for (let letter of lettersArray) {
    if (letterMap.has(letter)) {
      if (letterMap.get(letter) === 1) {
        return letter;
      }
    }
  }
  return null;
}

module.exports = firstSingleCharacter;
