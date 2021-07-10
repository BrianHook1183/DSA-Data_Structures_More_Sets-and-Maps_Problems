/* 
Given a list of words, group the words into anagram groups. That is, place all words in the list that are anagrams of each other into a group.

For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/

/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
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
    // console.log(word, wordMap);
    return wordMap;
  };
  // end of anagramMap() helper function

  // creates a map out of each word
  //TODO these maps all need to be stored in another global structure and to be accessed to see which ones are the same, when two maps are the same, you push the word into an array.
  words.forEach((word) => {
    if (word) {
      const wordMap = anagramMap(word);
    }
  });

  //! just to clear errors while debugging
  return [
    ["east", "teas", "eats"],
    ["cars", "arcs"],
    ["acre", "race"],
  ];
}

module.exports = anagramGroups;
