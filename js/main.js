/* Problem 1 */
function evenOrOdd(number) {
    if(number % 2 == 0){
       return "Even"
     } else {
        return "Odd"
     }
}

/* Problem 2 */
// 2- Multiples of 3 or 5
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

document.write(evenOrOdd(9))