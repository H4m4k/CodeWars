function createPhoneNumber(numbers){
    if(typeof numbers !== 'object') {
      return 'Input has to be an array of integers'
    } else if (numbers.length > 10 || numbers.length < 10 ) {
      return 'Input accepts 10 integers only'
    }
    let integers = `(${numbers.join('').substring(0,3)})`
    return integers;
  }
  
  // conditions to check:
   // array of integers 0-9
   // array length of 10
  // convert array into a string
  // use template literal to concatenate 