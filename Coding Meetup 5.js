// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// PJ - I will use filter function and then count the length of the returned array
// return length - Integer

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

  const count = {C: 0, JavaScript: 0, Ruby : 0}


  function countLanguages(list) {
    const test = list1.map(dev => dev.language)
    console.log(test.filter(item => item ).length)
    console.log(test)
  }

  countLanguages(list1)