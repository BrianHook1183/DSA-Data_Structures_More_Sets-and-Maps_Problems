/* 
Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.
*/

/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  // Helper function [modified from "Are 2 strings Anagrams?"]
  const anagramObject = (word) => {
    const letterMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");

    wordLowerArray.forEach((letter) => {
      const count = letterMap.get(letter);
      letterMap.set(letter, count ? count + 1 : 1);
    });
    return Object.fromEntries(letterMap);
  };
  // end of anagramObject() helper function
  const letterOccurrenceObject = anagramObject(word);

  //* My logic: To be able to create a palindrome out of unknown letters:
  // 1) There must be a maximum of one letter which occurs an odd amount of times (which is the case if its only the exact middle character (occurs once= odd) and allows for it to also be repeated elsewhere in the palindrome (3 times, 5 times, etc...))
  // 2) All other cases, given valid characters, is a palindrome.

  const odd = [];

  for (let letter in letterOccurrenceObject) {
    const count = letterOccurrenceObject[letter];
    if (count % 2) odd.push([letter, count]);
  }

  // dev feedback
  /* 
  console.log(
    `${word} has ${
      odd.length
    } instances of a letter occurring an odd amount of times. Can it be a palindrome? ${
      odd.length > 1 ? "No" : "Yes"
    }`
  );
   */

  return odd.length > 1 ? false : true;
}

module.exports = permutationPalindrome;
