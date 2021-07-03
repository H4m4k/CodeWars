/*
@description - Write a function that adds the username property to each object in the input array:
                The value of the username property is composed by concatenating:

                * firstName in lower-case;
                * first letter of the lastName in lower-case; and
                * the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
@param {array} - array of objects
@return {object key:value}
@solution with {map} select one array element at a time, create a new key in it ,than with {template string} create username value based on the data in the object, 
*/

const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

const current_Year = new Date();

  function addUsername(list) {
    list.map(dev => dev.username = `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${current_Year.getFullYear()-dev.age}`)
    return list;
  }

  console.log(addUsername(list1))
  