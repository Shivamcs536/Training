const user1 ="sathwik";
const user2="teju";
const user3="pavithra";
const user4="monis";
const user5="sreenija";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// const users=["sathwik" , "teju" , "pavithra" , "monis" , "sreenija"]
// console.log(users[0]);
// console.log(usres[4]);

// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

// users.map((user)=>{
//     console.log(user);
// })


// let x=users.map((user)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x)


// const users=["sathwik" , "teju" , "pavithra" , "monis" , "sreenija"]
// let y=users.forEach((user)=>{
//     return user;
// });
// console.log(y);



// const users=["sathwik" , "teju" , "pavithra" , "monis" , "sreenija"]

// users.push("Arun");
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift("Monis");
// console.log(users)

// users.shift();
// console.log(users);

// console.log(users.reverse());


// const users=["sathwik" , "teju" , "pavithra" , "monis" , "sreenija"]
// let x=users.join("");
// console.log(x, typeof(x));



// let frontend =["HTML","CSS","ANGULAR","REACTJS","VUE"];
// let backend=["Nodejs","Expressjs","Java","Php","GSolang"];
// let db=["Mongodb","Mysql","Oracle","Mariadb","Couchdb"];
// console.log(frontend);
// console.log(backend);















// let user1 = "Pranav";
// let user2 = "Aravind";
// let user3 = "KArthik";
// let user4 = "Shiva";
// let user5 = "Muzammil";
// let user6 = "Sanjay";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);
// console.log(user6);


// let users = ["Sanjay" , "Muzammil" , "Pranav", "Srivalli","pushpa"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i]);
// }


// let users = ["Sanjay" , "Muzammil" , "Pranav", "Srivalli","pushpa"];

// users.map((user ,i)=>{
//     console.log(user , i);
// })

// let x =users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

// let x = users.forEach((user,i)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);


// let userDetails = {
//     name :"Akshay",
//     age:22,
//     city:"Hyderabad",
// };
// console.log(userDetails);
// console.log(userDetails.name);

// console.log(userDetails.city);

//! nested object
// let userDetails = {
//     name :"Akshay",
//     age:22,
//    address:{
//     city:"Hyderabad",
//     area:"siddipet",
//     streetNo : 123,
//     pincode : {
//         pin1:123456,
//         pin2:654321
//     }
//    }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);
// console.log(userDetails.address.pincode.pin1);

// ! create array of objects
// let user1 ={
//     name:"sathvik",
//     city:"Karimnagar"
// }

// let user2={
//     name:"Raghu",
//     city:"ananthpur"
// }

// let user3={
//     name:"Shilpa",
//     city:"Kammam"
// }

// let user4={
//     name:"Bharath",
//     city:"Sathupalli"
// }

// console.log(user1.name);
// console.log(user2.name);

// let userDetails =[
//     {
//         name:"sathvik",
//         city:"Karimnagar"
//     },
//     {
//         name:"Raghu",
//         city:"ananthpur"
//     },
//     {
//         name:"Shilpa",
//         city:"Kammam"
//     },
//     {
//         name:"Bharath",
//         city:"Sathupalli"
//     }
// ];

// userDetails.map((user)=>{
// console.log(user.name);
// })




//JSON

let userData={
    "name":"Sathvik",
    "age":25,
    "city":"Karimnagar"
};
console.log(userData.name, typeof(userData));

let x=JSON.stringify(userData);
console.log(x, typeof(x));

let y=JSON.parse(x);
console.log(y);



