"use strict";
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
