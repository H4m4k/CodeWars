const string = 'AAAABBBCCDAABBB'


let uniqueInOrder=function(iterable){
    const test = [...iterable]
    console.log(test)
    const unique = [] 
    test.forEach(item => {
        if(unique.includes(item)) {
            return 0;
        }
    })
    return test
}

uniqueInOrder(string)
  // spread the input over an array
  // add first occurence of a character to uniqe array, each duplicate next to first occurence - discard