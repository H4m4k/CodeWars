const tester = {string: 'AAAABBBCCDAABBB', string2: 'ABBCcAD', string3: [1,2,2,3,3]  }




let uniqueInOrder=function(iterable){
    const test = [...iterable]
    console.log(test)

    const unique = []
    test.map(item => (!unique.includes(item))? unique.push(item): '' ) 
    console.log(unique)

    
    console.log(test.filter((item,i) => test[i] !== test[i+1]  ))

}

uniqueInOrder(tester.string)

  // spread the input over an array
  // test neighboring array items, if they are different return the item