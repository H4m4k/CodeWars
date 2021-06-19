//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
// convert number to a string, spread it over an array
// check the arrays length , and call proper switch case depending on the result
// create four functions to display proper Roman Numerals, according to respective place value ( thousands, hundreds, tens, ones )


const testN = 1990;

function solution(number) {
    const arrayN =[...number.toString()]

    switch(arrayN.length) {
        case 1:
            return onesF(arrayN[0])
            break;
        case 2:
            return tensF(arrayN[0]) + onesF(arrayN[1])
            break;
        case 3:
            return hundredsF(arrayN[0]) + tensF(arrayN[1]) + onesF(arrayN[2])
            break;
        case 4:
            return thousandsF(arrayN[0]) + hundredsF(arrayN[1]) + tensF(arrayN[2]) + onesF(arrayN[3])
            break;
        default:
            return 'No number provided'
            break;
    }
}

    function onesF(number) {
        const ones = { 0:' ', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}
        return ones[number]
    }

    function tensF(number) {
        const tens = {0:' ', 1: 'X', 2: 'XX', 3: 'XXX' , 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' } // *10
        return tens[number]
    }

    function hundredsF(number) {
        const hundreds = { 0: ' ',1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD' ,5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' }; // *100
        return hundreds[number]
    }
    
    function thousandsF(number) {
        const thousands =  { 1: 'M', 2: 'MM', 3: 'MMM' } // *1000
        return thousands[number]
    }


// solution(testN)
console.log(solution(123))
console.log(tensF(6))
console.log(tensF(7))
console.log(tensF(5))
console.log(solution(1990))
console.log(solution(2456))
// 