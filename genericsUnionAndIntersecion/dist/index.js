"use strict";
//union type
function printId(a) {
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a);
    }
}
printId("jaseel");
printId(10);
//literal type
let role;
role = "admin";
// role="Anzil"
console.log(role);
//generic type
function wrapValue(value) {
    return { value };
}
console.log(wrapValue("nabeel"));
console.log(wrapValue(true));
console.log(wrapValue(100));
let userAdmin = {
    name: "Anzil",
    email: "anzil049@gmail.com",
    role: "Admin"
};
console.log(userAdmin);
