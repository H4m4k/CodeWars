/*
@description - Your task is to return either:
                true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
                false otherwise.
@input {array} - array of objects
@return {boolean} - true/false
@solution - map the list1.language to count the occurence with reduce, than use min() and max() functions with a condition to return boolean
*/

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];

  function isLanguageDiverse(list) {
    let language = list.map(dev => dev.language)
    
    const count = language.reduce((sum,curr) => (sum[curr] = ++sum[curr] || 1, sum),{})
    console.log({count})
    const min = Math.min(...Object.values(count))
    const max = Math.max(...Object.values(count))
    console.log({min,max})
    const test = (2*min >= max) ? true : false ;
    console.log({test})
    return test
}
// 3
// 1
// 2*1 = 2

  console.log(isLanguageDiverse(list1))