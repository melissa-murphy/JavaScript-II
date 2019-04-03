// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// ONE
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return items.length;
}
console.log(getLength());

//TWO
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = items[items.length - 1];
  return lastItem;
}
console.log(last());

// THREE
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x + y;
}
console.log(sumNums(1,3));

// FOUR
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y;
}
console.log(multiplyNums(2,3));

// FIVE
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // if (item === items.item) {
  //   return true;
  // } else {
  //   return false;
  // }
  // let itemsExists = items.find(val => {
  //   if (val.item === itemExists) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // let foundItem = items.find(element => {
  //   if (foundItem === element) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  return items.includes(item);
}
console.log(contains('Gum'));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

const moreItems = ['ruler', 'calculator', 'lunchbox'];
// add items and moreItems to newBackpack
const newBackpack = [];
 function packBackpack(arr1, arr2) {
   newBackpack.push(arr1, arr2);
   return newBackpack;
 }

console.log(packBackpack(items, moreItems));