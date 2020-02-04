"use strict";
const formatString = function(string) {
  let simbols = string.split("");
  if (simbols.length <= 40) {
    console.log(string);
  } else {
    simbols.length = 40;
    console.log(simbols.join(""), "...");
  }
};
formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
