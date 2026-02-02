"use strict";
;
const students = [
    { name: "Anzil", mark: 90 },
    { name: "Adhi", mark: 70 },
    { name: "Jaseer", mark: 35 },
    { name: "Ajmal", mark: 65 },
    { name: "Jaseel", mark: 30 },
    { name: "Nabeel", mark: 67 },
    { name: "Rinshad", mark: 32 },
    { name: "Sahal", mark: 28 },
    { name: "Adil", mark: 75 },
    { name: "Subin", mark: 89 },
];
function checkResult(student) {
    return student.mark >= 40 ? "pass" : "fail";
}
students.forEach((student) => {
    console.log(`${student.name}:${checkResult(student)}`);
});
