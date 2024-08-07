/* Problem 1 */
function evenOrOdd(number) {
    if(number % 2 == 0){
       return "Even"
     } else {
        return "Odd"
     }
}

/* Problem 2 */
// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.

function sumOfMultiples(number) {
    if (number < 0) {
      return 0;
    }
  
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
}

/* Problem 3 */
// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(sentence){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const normalizedSentence = sentence.toLowerCase();

  const uniqueLetters = new Set(alphabet.split('').filter(letter => normalizedSentence.includes(letter)));

  // Check if we found all the letters of the alphabet
  return uniqueLetters.size === 26;
}

/* problem 4 */
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
// -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create 
//a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
 if (walk.length !== 10) return false;

 let vertical = 0;
 let horizontal = 0;

 for (let direction of walk) {
  switch (direction) {
    case 'n':
      vertical += 1;
      break;
    case 's':
      vertical -= 1;
      break;
    case 'e':
      horizontal += 1;
      break;
    case 'w':
      horizontal -= 1;
      break;
  }
 }

 return vertical === 0 && horizontal === 0;  // To return to the starting point, both vertical and horizontal distances should be zero
}


/* problem 5 */
/* Examples: accum("abcd") -> "A-Bb-Ccc-Dddd"
             accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
             accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s){
    return s.split('').map(function(ele, index){
      return ele.toUpperCase() + ele.toLowerCase().repeat(index);
    }).join('-');
}


/* problem 6 */
/*
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). 
x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4
*/

function findQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1; // First quadrant
  } else if (x < 0 && y > 0) {
    return 2; // Second quadrant
  } else if (x < 0 && y < 0) {
    return 3; // Third quadrant
  } else if (x > 0 && y < 0) {
    return 4; // Fourth quadrant
  }
}

/* problem 7 */
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names){
  const length = names.length;

  if (length === 0){
      return 'no one likes this';
  } else if (length === 1) {
    return `${names} likes this`;
  } else if(length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if(length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (length > 3 ){
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

/* problem 8 */
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
/* 
  Example:
  [
    "  *  ",
    " *** ", 
    "*****"
  ]
*/
function buildTower(nFloors) {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    const numSpaces = nFloors - i - 1;
    const numStars = i * 2 + 1;
    
    const floor = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
    
    tower.push(floor);
  }

  return tower;
}

/* problem 9 */
// Write Number in Expanded Form
/* Examples 
  expandedForm(12); // Should return '10 + 2'
  expandedForm(42); // Should return '40 + 2'
  expandedForm(70304);
*/
function expandedForm(num) {
  const numStr = num.toString();
  const length = numStr.length;

  const expandedParts = numStr.split('').map((ele, index) => {
    return ele !== '0' ? ele + '0'.repeat(length - index - 1) : null;
  });

  return expandedParts.filter(Boolean).join(' + ');
}

/* problem 10 */
// Convert string to camel case
/*
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  return str.replace(/[-_]+/g, ' ').replace(/\s(.)/g, (match, letter) => letter.toUpperCase()).replace(/\s+/g, '');
}

/* problem 11 */
function firstNonRepeatingLetter(s){
  const lowerCaseStr = s.toLowerCase();

  const eleArray = lowerCaseStr.split('').map((ele, index) => {
    return {
      ele,
      originalEle: s[index],
      count: lowerCaseStr.split(ele).length - 1
    };
  });

  const result = eleArray.filter(item => item.count === 1); // Find the first character with count 1

  return result.length ? result[0].originalEle : '';

}

/* OOP */
/* problem 12 */
// Classic Hello World: Description:
// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything
// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

//     Solution.main("parameter1","parameter2");
// Hints:

// Check your references
// Think about the scope of your method
// If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.
class Solution {
  static main(...args) {
      console.log("Hello World!");
  }
}

/* problem 13 */
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function returnDay(num){
  switch(num){
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
     return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday"
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a bumber between 1 and 7";
  }
}

/* problem 14 */
// Expressions Matter
// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.

function expressionsMatter(a, b, c) {
  return Math.max(
      a + b + c,
      a + b * c,
      a * b + c,
      a * b * c,
      (a + b) * c,
      a * (b + c)
  );
}
expressionsMatter(1, 2, 3);  // Output: 9

/* problem 15 */
// Description:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
function add(a, b) {
  // Make sure a and b are strings
  a = a.toString();
  b = b.toString();

  // Determine the length of the numbers
  let maxLength = Math.max(a.length, b.length);

  // Pad the shorter string with zeros at the beginning
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let carry = 0;
  let result = '';

  // Loop through the numbers from the end to the beginning
  for (let i = maxLength - 1; i >= 0; i--) {
      let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
      if (sum >= 10) {
          carry = 1;
          sum -= 10;
      } else {
          carry = 0;
      }
      result = sum + result;
  }

  // If there's a carry left, add it to the beginning of the result
  if (carry) {
      result = carry + result;
  }

  return result;
}

// Example usage:
console.log(add("123", "321")); // "444"
console.log(add("11", "99"));   // "110"

/* problem 16 */
// A Strange Trip to the Market: Description:
// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.
function isLockNessMonster(s) {
  // Define the phrases to look for
  const phrases = ["tree fiddy", "3.50", "three fifty"];
  
  // Check if any of the phrases are present in the string
  for (let phrase of phrases) {
      if (s.includes(phrase)) {
          return true;
      }
  }
  
  // If none of the phrases are found, return false
  return false;
}

// Example usage:
isLockNessMonster("Hello, can I borrow tree fiddy?");  // true
isLockNessMonster("I need about 3.50.");               // true
isLockNessMonster("Do you have three fifty?");         // true
isLockNessMonster("Just a normal conversation.");      // false

/* problem 17 */
// Not very secure
// Description:
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function isAlphanumeric(str) {
  // Regular expression to check if the string is alphanumeric
  const regex = /^[a-zA-Z0-9]+$/;

  // Test if the string matches the regular expression and is not empty
  return regex.test(str) && str.length > 0;
}

// Example usage:
isAlphanumeric("abc123");    // true
isAlphanumeric("ABC456");    // true
isAlphanumeric("123456");    // true
isAlphanumeric("abc 123");  // false (contains space)
isAlphanumeric("abc_123");  // false (contains underscore)
isAlphanumeric("");         // false (empty string)

/* problem 18 */
// Description:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
function scramble(str1, str2) {
  // Function to count character frequencies
  function countChars(str) {
      const count = {};
      for (const char of str) {
          count[char] = (count[char] || 0) + 1;
      }
      return count;
  }
  
  // Get the character counts for both strings
  const str1Count = countChars(str1);
  const str2Count = countChars(str2);
  
  // Check if str1 has enough of each character required by str2
  for (const char in str2Count) {
      if (!str1Count[char] || str1Count[char] < str2Count[char]) {
          return false;
      }
  }
  
  return true;
}

// Example usage:
scramble('rkqodlw', 'world'); // true
scramble('cedewaraaossoqqyt', 'codewars'); // true
scramble('katas', 'steak'); // fal

/*** problem 19 ***/
// RGB To Hex Conversion
function rgbToHex(r, g, b) {
  function toHex(value) { // Helper function to clamp and convert a number to a two-digit hex string
    value = Math.max(0, Math.min(255, value)); // Clamp value between 0 and 255
    return value.toString(16).toUpperCase().padStart(2, '0'); // Convert to hexadecimal and pad with zero if needed
  }

  return toHex(r) + toHex(g) + toHex(b);// Convert each RGB component to a hex string and concatenate
}

// Example usage:
rgbToHex(255, 255, 255); // "FFFFFF"
rgbToHex(255, 255, 300); // "FFFFFF"
rgbToHex(0, 0, 0);       // "000000"
rgbToHex(148, 0, 211);   // "9400D3"

/*** problem 20 ***/
// Convert PascalCase string into snake_case
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
function toSnakeCase(pascalCaseString) {
  
  if (typeof pascalCaseString !== 'string') {// Check if the input is a number or not a string
      return String(pascalCaseString);
  }

  // Convert PascalCase to snake_case
  return pascalCaseString
  // Insert an underscore before each uppercase letter
  .replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(); // Convert the entire string to lowercase
      
}

// Example usage:
toSnakeCase("TestController"); // "test_controller"
toSnakeCase("MoviesAndBooks"); // "movies_and_books"
toSnakeCase("App7Test");       // "app7_test"
toSnakeCase(1);                // "1"

/*** problem 21 ***/
// Double Char
function doubleChar(str) {
  // Split the string into an array of characters, map over each character to repeat it twice, and join back into a string
  return str.split('').map(char => char + char).join('');
}

// Example usage:
doubleChar("String");      // "SSttrriinngg"
doubleChar("Hello World"); // "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ");     // "11223344!!__  "

