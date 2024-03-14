let arr = [3, 4, 5, 6];

/* 
Instead of manually iterating over an array we can use the .map method like with the data used in the 
featured projects section...
*/

// For example, imagine you had to multiply each element by 3? How would it be done?

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
}

// console.log(arr);

/* Below we can also use the array map method */
let array2 = [2, 4, 6, 8];

let modifiedArr = arr.map(function (element) {
  return element * 3;
});

// console.log(modifiedArr); //

/* Below  is a perfect example of using the .map method over an array of objects*/
let users = [
  { firstName: "Mark", lastName: "Russle" },
  { firstName: "Elijah", lastName: "Wilson" },
  { firstName: "Ayari", lastName: "Soto" },
];

// I can use .map() to iterate ovet the array and join firstName and lastName values together...
let userNames = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});

// console.log(userNames);

//

/*
The syntax for the .map() is as follows:

- array.map(function(element, index, array) {}, this);

   - The function() is called into each array element, while the map() always passed the element, index, and the whole array object to it...
   - The `this` argument will be used inside the callback function with a default value of undefined...

  Below we use an exmaple and change the `this` value to the number `69`
*/
let array3 = [20, 30, 40, 50];

array3.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
}, 69);
