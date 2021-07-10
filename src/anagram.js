/* 
Given two strings "s1" and "s2", determine if the two strings are anagrams of each other or not.

Two words are anagrams of each other if they are both spelled with the letters. For example, the words "race" and "care" are anagrams.

Write a function that returns true if the two strings are anagrams of each other, false otherwise.
*/

/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  s1Map = new Map();
  s2Map = new Map();

  const s1LowerArray = s1.toLowerCase().split("");
  const s2LowerArray = s2.toLowerCase().split("");

  s1LowerArray.forEach((letter) => {
    const count = s1Map.get(letter);
    s1Map.set(letter, count ? count + 1 : 1);
  });
  s2LowerArray.forEach((letter) => {
    const count = s2Map.get(letter);
    s2Map.set(letter, count ? count + 1 : 1);
  });

  //* equality check
  for (let [key, value] of s1Map.entries()) {
    if (s2Map.get(key) !== value) return false;
  }

  return true;
}

module.exports = anagram;
