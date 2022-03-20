/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
  console.log(name);
}
printName("Sultan");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birth) {
  let age = 2022 - birth;
  console.log(age);
}

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  let dict = {
    English: "Hello ",
    Spanish: "Hola ",
    French: "Bonjour ",
    Turkish: "Merhaba ",
  };
  console.log(dict[language] + name);
}
printHello("Sultan", "Spanish");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    return console.log(`Max = ${num1}`);
  } else {
    return console.log(`Max = ${num2}`);
  }
}
printMax(1, 2);
