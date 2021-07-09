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
    if (s1Map.has(letter)) {
      const count = s1Map.get(letter);
      s1Map.set(letter, count + 1);
    } else {
      s1Map.set(letter, 1);
    }
  });
  s2LowerArray.forEach((letter) => {
    if (s2Map.has(letter)) {
      const count = s2Map.get(letter);
      s2Map.set(letter, count + 1);
    } else {
      s2Map.set(letter, 1);
    }
  });

  //* equality check
  for (let [key, value] of s1Map.entries()) {
    if (s2Map.get(key) !== value) return false;
  }

  return true;
}

module.exports = anagram;
