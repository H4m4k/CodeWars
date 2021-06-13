const string = "371407298a --- dreary, ###100.153 I thought, 9926315strong -127&() 1";
const string2 = "153000153407000407";
const string3 = "QK29a45[&erui9026315";
const regzero = /(0){2,3}/g

function isSumOfCubes(s) {
    const regexp = /(\d){1,3}/g   
    const numbers = [...s.match(regexp)] // filter string with regular expression and spread the matches on an array
    let sums = []
    let cubic = []
    trimZeroes(numbers)
    console.log(numbers)
    
    sums = numbers.map(number => [...number].reduce((acc,cval) => { // spread each element of numbers array to calculate the sum of power 3 
        return acc + power(cval)
    },0))

    sums = sums.map( sum => sum.toString()) // convert the integers back to strings to use the strict compare , as two arrays elements will never be equal
   
    cubic = numbers.filter((number,i) => {
        return numbers.includes(sums[i])
    })
   
    if (cubic.length === 0) {
        return console.log('Unlucky')
    } else {
        return console.log(`${cubic.join(' ')} ${sumCubic(cubic)} Lucky`)
    }

    // console.log(numbers)
    // console.log(`
    //                 ${sums}
                                
    //                 ${cubic} - cubic length ${cubic.length}`)

    // console.log(isCubic(numbers, sums[1]))
  
}

function power(number) {
    return Math.pow(Number.parseInt(number), 3)
}

function sumCubic(array) {
    return array.reduce((acc,cval) => acc+Number.parseInt(cval),0)
}

function trimZeroes(array) {
    if (array.includes(regzero)) {
        console.log(`Numbers zawiera zera`)
        return array = array.splice(array.indexOf('regzero'),1,'0')
    }
}

isSumOfCubes(string);
isSumOfCubes(string2);
isSumOfCubes(string3);
