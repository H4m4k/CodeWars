/*
@description - You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding    
            meetup that you are organising.

            Your task is to return:

            true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
            false otherwise.
@param {array} - array of objects - developers attending a meeting
@return {boolean} - return true if all age groups are present
@solution - map the age to separate array, create an object to store the boolean for each age group, check each element of array and store true/false in the object according age group
*/

const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];

  const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];


  function isAgeDiverse(list) {
      const age = list.map(dev => dev.age)
      const result = {
        teens: false,
        twenties: false,
        thirties: false,
        forties: false,
        fifties: false,
        sixties: false,
        seventies: false,
        eighties: false,
        nineties: false,
        centenarian: false
      }

      age.forEach(dev => {
          if( dev < 20) {
            result.teens = true;
          } else if ( dev > 19 && dev < 30) {
              result.twenties = true;
          } else if ( dev > 29 && dev < 40) {
              result.thirties = true;
          } else if ( dev > 39 && dev < 50) {
              result.forties = true;
          } else if ( dev > 49 && dev < 60) {
              result.fifties = true;
          } else if ( dev > 59 && dev < 70) {
              result.sixties = true;
          } else if ( dev > 69 && dev < 80) {
              result.seventies = true;
          } else if ( dev > 79 && dev < 90) {
              result.eighties = true;
          } else if ( dev > 89 && dev < 100) {
              result.nineties = true;
          } else if ( dev > 99) {
              result.centenarian = true;
          }
      })
      return Object.values(result).every(item => item)
  }

  console.log(isAgeDiverse(list1))
  console.log(isAgeDiverse(list2))