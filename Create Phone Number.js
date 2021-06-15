const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

createPhoneNumber(testArray);

function createPhoneNumber(numbers){
    if(typeof numbers !== 'object') {
      return 'Input has to be an array of integers'
    } else if (numbers.length > 10 || numbers.length < 10 ) {
      return 'Input accepts 10 integers only'
    }
    let integers = `(${numbers.join('').substring(0,3)}) ${numbers.join('').substring(3,6)}-${numbers.join('').substring(6)}`
     console.log(integers)
    return integers;
  }
  
  // conditions to check:
   // array of integers 0-9
   // array length of 10
  // convert array into a string
  // use template literal to concatenate 