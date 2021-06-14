function iqTest(numbers){
    const general = numbers.split(' ')
    const even = []
    const odd = []
    
    console.log(general)
    general.map(number => ( number % 2 === 0) ? even.push(number) : odd.push(number) )
  
    console.log( even + '  ||   '  + odd)
    
    if ( even.length === 1) {
      return general.indexOf(even[0])+1
    } else {
      return general.indexOf(odd[0])+1
    }
    
    
    // declare three arrays
      // one for all numbers
      // one for even numbers
      // one for odd numbers
    // spread numbers onto general array
      // filter array for even and odd numbers
      // push results of filtering to proper array
    // check which array has length of 1
    // check overall array for index of element from array.length = 1
    // return that index increased by one
    
    }