"use strict";
const checkForSpam = function(message) {
  let searchWord = message.toUpperCase();
  if (
    searchWord.includes("SPAM") === true ||
    searchWord.includes("SALE") === true
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkForSpam("Get best sale offers now!");
