"use strict";
let input;
let total = 0;
const numbers = [];
do {
  input = prompt("Введите число");
  if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);
for (const number of numbers) {
  total += Number(number);
}
console.log(`Общая сума чисел равна ${total}`);
