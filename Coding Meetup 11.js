/*
    @description - write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
    @param {array} - array of objects
    @return {integer} - sum of age of all developers / number of developers
*/

const list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];

const list2 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' }
  ];

const list3 = [{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}]
const list4 = [{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"}]
 const list5 =  [{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
                {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
                {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
                {"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
                {"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},
                {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},
                {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},
                {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},
                {"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},
                {"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}]

  function getAverageAge(list) {
    const averageAge = Math.round(list.reduce((sum,curr) => sum += curr.age, 0)/list.length);
    return (list.length !== 1)? averageAge : list[0].age
  }


  console.log(getAverageAge(list1))
  console.log(getAverageAge(list2))
  console.log(getAverageAge(list3))
  console.log(getAverageAge(list4))
  console.log(getAverageAge(list5))