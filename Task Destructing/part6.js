// let chosen=1;
// let myFriends = [
//  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// // Write Your Code Here
// if (chosen === 1) {
//  let [
//  {
//  title: t,
//  age: a,
//  available: v,
//  skills: [, two],
//  },
//  ] = myFriends;
//  console.log(t);
//  console.log(a);
//  if (v === true) {
//  console.log("Available");
//  } else {
//  console.log("Not Available");
//  }
//  console.log(two);
// }
// if (chosen === 2) {
//  let [
//  ,
//  {
//  title: t,
//  age: a,
//  available: v,
//  skills: [, two],
//  },
//  ] = myFriends;
//  console.log(t);
//  console.log(a);
//  if (v === true) {
//  console.log("Available");
//  } else {
//  console.log("Not Available");
//  }
//  console.log(two);
// }
// if (chosen === 3) {
//  let [
//  ,
//  ,
//  {
//  title: t,
//  age: a,
//  available: v,
//  skills: [, two],
//  },
//  ] = myFriends;
//  console.log(t);
//  console.log(a);
//  if (v === true) {
//  console.log("Available");
//  } else {
//  console.log("Not Available");
//  }
//  console.log(two);
// }
// // If chosen === 1
// // ("Osama");
// // 39;
// // ("Available");
// // ("CSS");
// // // If chosen === 2
// // ("Ahmed");
// // 25;
// // ("Not Available");
// // ("Django");
// // // If chosen === 3
// // ("Sayed");
// // 33;
// // ("Available");
// // ("Laravel");
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const { title, age, available, skills } = myFriends[chosen - 1];
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skills[1]);
