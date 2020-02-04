"use strict";
const calculateEngravingPrice = function(message, pricePerWord) {
  message = prompt().split(" ").length;
  return message * pricePerWord;
};
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
