"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name},I am ${this.age} years old`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`${this.name} teaches ${this.subject}`);
    }
}
const teacher1 = new Teacher("Anzil", 21, "MERN");
teacher1.introduce();
teacher1.teach();
