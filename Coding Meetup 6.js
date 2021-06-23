// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

//     true if all developers in the list code in the same language; or
//     false otherwise.

// PJ - Array.every checking current element, against array[index-1]  - based on w3schools resource

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];

const list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ];


  function isSameLanguage(list) {
    return list.every((dev,index,array)=> {
        if( index === 0) {
            return true;
        } else {
            return (dev.language === array[index-1].language)
        }
    })
}

  isSameLanguage(list2)

  // another variant - much simpler 


//   function isSameLanguage(list) {
//     return list.every(e => e.language === list[0].language);
//   }

// e       - this is the current element              .language is the key in this element
// list[0] - points to first element of list array    .language is the key in that element
//           result is achieved by comparing e.language, against list[0].language, because all are expected the same , so the [0] index really doesnt matter, it just has to be within the  //           length of the array