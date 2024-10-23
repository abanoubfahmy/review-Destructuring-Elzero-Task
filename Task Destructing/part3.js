let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Proper array concatenation
let sumArray = [...arr1, ...arr2, ...arr3];
console.log(sumArray);

// Destructuring the array
let [a, , , , , , b, c] = sumArray;

console.log(a);  // Ahmed
console.log(b);  // Haytham
console.log(c);  // Shady
