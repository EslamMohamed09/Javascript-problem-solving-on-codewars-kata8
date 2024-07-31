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

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("Hello, world!"));