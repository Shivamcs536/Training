function addToCart(){
    alert("product is added to cart successfully");
    document.body.style.background="red";
}





//without parameters 
// function demo(){
//     console.log("function is executing....");
// }
// demo();
// demo();//reusable

//function with parameters and arguments
//let a=10 // 10 is parameters and a is arguments 
// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a);
//     console.log(b);
// }
// add(5,6);

// function add(a,b){
//     console.log(a+b);
    
// }
// add(5,6);
// add(3,4);

// // named function 
// function test(){
//     console.log("named function is executing...");
// }
// test();

//anonymous function
// function(){

// }
// ();

//funcion expression
// let x= function(){
    // console.log("anonymous is not executing");
// }
// console.log(x);
// x();

//iife

// (function(){
//     console.log("IIFE");
// }
// )() //immediately invoked );() cannot be done
// only once immediate invoked )()(); cannot be done



//arrow function 

// function demo(){
//     //statements
// }
// demo();

// function demo(a){
//     console.log("hello");
// }
// demo();

// let x = _=>{console.log("arrow function")};

// let x = _=>console.log("arrow function");

// let x = ()=>{console.log("arrow function")};
// x();

// let x= a =>console.log(a);
// x(6);

//implicit and explicit return

// function test(a,b){
//     console.log("hello");
//     return a+b;//ending statement
//     // console.log("hello");
// }
// console.log(test(2,3));//explicit 

// let x=(a,b) => {return a*b};
// console.log(x(5,5));// with arrow function implict works

// let y =(a,b) => a+b;
// console.log(y(100,200));



//high order function and callback function 
// function hof(a){//high order function 
//     return a;
// }
// // let x=hof("sam");
// // let x=hof([1,2,3,4,5]);
// let x=hof(function(){return "callback function"});//callback function
// console.log(x);

// let y=function(){return "callback function"};
// console.log(y());

// let users=["manoj" , "monis" , "sathish" , "ganesh"];
// console.log(users);
// // users.map((user)=>{
// //     console.log(user);

// // })
// users.map(function(user){console.log(user)})


// var a=10;
// let b=45;
// function x(){
//     var user ="monis";
//     let company ="mrcet";
//     var sal ="10,000";
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a, b);
// }
// x();


function x(){
    let a=10;
    const b=20;
    console.log(a,b);
    function y(){
        let p="Js";
        var q="ReactJs";
        console.log(p,q);
        function z(){
            const username='HARISH';
            console.log(username);
            console.log(a);
            console.log(q);

            
        }
        z();
    }
    y();
}
x();