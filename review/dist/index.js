"use strict";
// function hello<T>(value:T ):T{
//     return value;
// }
// console.log(hello("hi"));
// console.log(hello(10))
// interface User{
//     name:string;
//     age?:number;
// }
// const person:User={
//     name:"Anzil",
// }
// const person2:User={
//     name:"rahul",
//     age:20
// }
// console.log(person);
// console.log(person2);
//optional types
// type isString<T>=T extends string?"Yes":"No";
// type T1=isString<string>
// type T2=isString<number>
function findLength(value) {
    console.log(value.length);
}
findLength("anzil");
findLength([1, 2, 3, 4, 5]);
