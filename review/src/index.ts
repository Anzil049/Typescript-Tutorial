// function hello<T>(value:T ):T{
//     return value;
// }

// console.log(hello("hi"));
// console.log(hello(10))


interface User{
    name:string;
    age?:number;
}

const person:User={
    name:"Anzil",
}

const person2:User={
    name:"rahul",
    age:20

}

console.log(person);
console.log(person2);