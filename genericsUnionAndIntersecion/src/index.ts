function printId(a:number|string){
    if(typeof a==="string"){
        console.log(a.toUpperCase());
    }else{
        console.log(a);
    }
}

printId("jaseel");
printId(10);

let  role:"admin"|"user"|"guest";

role="admin"
// role="Anzil"

console.log(role);