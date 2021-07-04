/*
@description - write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
@input {array} - array of objects ( developers)
@return {array} - array of objects the meet the conditions
@solution - i have used filter to select elements that meet the conditions
*/

const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];

  function findAdmin(list, lang) {
    return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes')  
  }

  console.log(findAdmin(list1,'JavaScript'))

  