/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
let name = "Hamza "
greet(name);
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(9));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if (n % 2 === 1) {
    return (n - 1) / 2;
  } else {
    return n / 2;
  }
}

console.log(oddsSmallerThan(15));
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 === 1) {
    return n ** 2;
  } else {
    return n + n;
  }
}
console.log(squareOrDouble(16));
console.log(squareOrDouble(9));

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
