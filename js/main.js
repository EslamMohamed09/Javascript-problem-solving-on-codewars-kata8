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
