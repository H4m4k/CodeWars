const string = "0 1531532 -827&()";
const string2 = "aqdf&0#1xyz!22[153(777.777"
const string3 = "QK29a45[&erui9026315"

function isSumOfCubes(s) {
    const regexp = /(\d){1,3}/g   
    const numbers = [...s.match(regexp)] // filter string with regular expression and spread the matches on an array
    let sums = []
    let cubic = []
 
    sums = numbers.map(number => [...number].reduce((acc,cval) => { // spread each element of numbers array to calculate the sum of power 3 
        return acc + power(cval)
    },0))

    sums = sums.map( sum => sum.toString()) // convert the integers back to strings to use the strict compare , as two arrays elements will never be equal
   
    cubic = numbers.filter((number,i) => numbers.includes(sums[i]))
   
    
    console.log(numbers)
    console.log(`
                    ${sums}
                                
                    ${cubic}`)

    console.log(isCubic(numbers, sums[1]))
    // let test = numbers.map(number => [...number].reduce((acc, cVal) => {
    //     return acc + power(cVal)
    // }, 0))

//     console.log(test + ' ' + numbers)
  
//     numbers.map((number,i) => {
//         if (number == test[i]) {
//             return cubic.push(Number.parseInt(number) )
//         } 
//     })
  
//     if(cubic.length === 0) {
//       return `Unlucky`
//     } else {
//       let sum = cubic.reduce((acc,cVal) => acc + cVal)
//       cubic.push(sum)
//       console.log(cubic.join(' ') + ` Lucky` + `  Type:` + typeof cubic)
//       console.log(`Length of cubic is: ` + cubic.length)
//       return cubic.join(' ') + ` Lucky`
//     }
}

function power(number) {
    return Math.pow(number, 3)
}

function isCubic(array , sum) {
    return array.includes(sum)
}

isSumOfCubes(string);
isSumOfCubes(string2);
isSumOfCubes(string3);

