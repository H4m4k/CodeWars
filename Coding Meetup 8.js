/*
@description   Your task is to return true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe',   
  'Oceania'. false otherwise.
@param  {array} - array of objects - developers attending a meeting
@return {boolean} - true if developers from all continents are present/ false otherwise
@solution - array with hardcoded continents , array with developer continents with 'map()' , check each other with 'every()' if all the continents are present 
*/


const list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
  ];

  const list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 35, language: 'JavaScript' }
  ];

  function allContinents(list) {
    const test_Array =['Africa' , 'Americas' , 'Asia' , 'Europe', 'Oceania']
    const dev_Continents = list.map(dev => dev.continent)
    return test_Array.every(cont => dev_Continents.includes(cont))
  }

  console.log(allContinents(list1))
  console.log(allContinents(list2))