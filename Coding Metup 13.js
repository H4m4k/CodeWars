/*
@description - Your task is to return either:
                true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
                false otherwise.
@input {array} - array of objects
@return {boolean} - true/false

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
      console.log(language)
      const count = language.reduce((sum,curr) => (sum[curr] = ++sum[curr] || 1, sum),{})   
      const max = Math.max(...Object.values(count))
      const min = Math.min(...Object.values(count))
      
      return (max-min > 1) ? false : true ;

  }

  console.log(isLanguageDiverse(list1))