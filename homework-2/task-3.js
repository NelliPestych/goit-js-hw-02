"use strict";
const findLongestWord = function(string) {
  let longestWord = string.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
};
findLongestWord("Google do a roll");
