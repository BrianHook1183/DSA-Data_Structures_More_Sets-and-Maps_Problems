/* 
Given a list of words, group the words into anagram groups. That is, place all words in the list that are anagrams of each other into a group.

For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/

/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const anagramMap = new Map();

  words.forEach((ogWord) => {
    const wordLowerSorted = ogWord.toLowerCase().split("").sort().join("");
    const group = anagramMap.get(wordLowerSorted);

    anagramMap.set(wordLowerSorted, group ? [...group, ogWord] : [ogWord]);
  });

  const anagramObject = Object.fromEntries(anagramMap);
  const groupedWords = Object.values(anagramObject);

  return groupedWords;
}

module.exports = anagramGroups;
