const string = "0 1531532 -827&()";
const string2 = "aqdf&0#1xyz!22[153(777.777"
const string3 = "QK29a45[&erui9026315"

function isSumOfCubes(s) {
    const regexp = /(\d){1,3}/g   // filter string with regular exx
    let numbers = [...s.match(regexp)]
    let cubic = []

    console.log(numbers)

  
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
// }

// function power(element) {
//     return Math.pow(element, 3)
}

isSumOfCubes(string);
isSumOfCubes(string2);
isSumOfCubes(string3);