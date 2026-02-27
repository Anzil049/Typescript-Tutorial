// type id= number|string;

// let Username:id="Anzil";
// let Age:id=20;

// console.log(Username,Age)

// function hello<T>(val:T){
//     return val;
// }

// console.log(hello("Anzil"));
// console.log(hello(21));


// function voidExample():void{
//     console.log("Anzil")
//     return ;
// }

// function neverExample():never{
//     throw new Error("Error")
// }

// voidExample();
// neverExample();

// let number=[12,40,50.60]

function array(...number:number[]){
    console.log(number);
}

array(12,40,50,60);

