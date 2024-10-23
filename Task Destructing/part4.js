const member ={
    age:30,
    working:false,
    country:"Egypt",
    hobbies :["Reading", "Swimming", "Programming"],
}
  let{age:a,working:b,country:c,hobbies:[d,s,w]}=member;
  console.log(`My Age Is ${a} And Iam ${ b? "" : "Not"} Working`);

  console.log(`I Live in ${c}`);


  console.log(`My Hobbies: ${d} And ${w}`);
// My Hobbies: Reading And Programming
//   const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   let { age: a, working: b, country: c, hobbies: [d, s, w] } = member;
//   console.log(`My Age Is ${a} And I am${b ? "" : " Not"} Working`);
  