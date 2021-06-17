const string = 'AAAABBBCCDAABBB'


let uniqueInOrder=function(iterable){
    const test = [...iterable]
    console.log(test)

    const unique = []
    test.map(item => (!unique.includes(item))? unique.push(item): '' ) 
    console.log(unique)

    let tester = 0;
    const distinct = []
    test.map((item,index) => (item[index] !== item[index + 1])? distinct.push(item): '')
    console.log(distinct)
}

uniqueInOrder(string)
  // spread the input over an array
  // add first occurence of a character to uniqe array, each duplicate next to first occurence - discard