"use strict";
let userName = "Anzil";
let age = 21;
let isDeveloper = true;
let skills = ["HTML", "CSS", "JS", "Node", "Express", "MongoDB", "React", "Typescript"];
let user = ["Anzil", 21];
var Status;
(function (Status) {
    Status[Status["success"] = 0] = "success";
    Status[Status["failure"] = 1] = "failure";
    Status[Status["loading"] = 2] = "loading";
})(Status || (Status = {}));
let currentStatus = Status.success;
console.log(userName);
console.log(age);
console.log(isDeveloper);
console.log(skills);
console.log(user);
console.log(Status[currentStatus]);
