const tester = {string: 'AAAABBBCCDAABBB', string2: 'ABBCcAD', string3: [1,2,2,3,3]  }




let uniqueInOrder=function(iterable){
    const test = [...iterable]
    console.log(test)

    return test.filter((item,i) => item !== test[i+1] )

}

uniqueInOrder(tester.string)

  // spread the input over an array
  // test neighboring array items, if they are different return the item