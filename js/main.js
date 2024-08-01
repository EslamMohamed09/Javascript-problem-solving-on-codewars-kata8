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
