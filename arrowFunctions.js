/**
 * Rewrite the following `greet` function as an arrow function
 */
function greet(name) {
  return `Hello ${name}`;
}

const greet = (name) => `Hello ${name}`;

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
function sum(a, b) {
  // Your code here
  const sum = (a, b) => a + b;
}

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
function square(n) {
  // Your code here
  const square = (n) => n * n;
}

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
function squares(numbers) {
  // Your code here
  const squares = (numbers) => numbers.map((n) => n * n);
}

module.exports = {
  greet,
  sum,
  square,
  squares,
};
