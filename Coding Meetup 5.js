// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// I have used reduce to properly count without overcomplicating - based on MDN resource
// return object { language: count_integer }

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

  function countLanguages(list) {
    let countedLanguages = list.reduce((sum, dev) => {
      if (dev.language in sum) {
        sum[dev.language]++
      }
      else {
        sum[dev.language] = 1
      }
      return sum
    }, {})
    return countedLanguages
  }

  countLanguages(list1)