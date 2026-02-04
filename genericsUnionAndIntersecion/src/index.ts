//union type

function printId(a: number | string) {
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    } else {
        console.log(a);
    }
}

printId("jaseel");
printId(10);

//literal type

let role: "admin" | "user" | "guest";

role = "admin"
// role="Anzil"

console.log(role);

//generic type

function wrapValue<T>(value: T): { value: T } {
    return { value };
}

console.log(wrapValue("nabeel"));
console.log(wrapValue(true));
console.log(wrapValue(100));

//intersection type

type User= {
    name: string;
    email: string;
}

type Admin= {
    role: string;
}

type AdminUser= User & Admin ;

let userAdmin:AdminUser={
    name:"Anzil",
    email:"anzil049@gmail.com",
    role:"Admin"
}

console.log(userAdmin);