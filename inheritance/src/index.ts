
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`My name is ${this.name},I am ${this.age} years old`);
    }
}


class Teacher extends Person {

    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    teach(): void {
        console.log(`${this.name} teaches ${this.subject}`);
    }


}

const teacher1 = new Teacher("Anzil", 21, "MERN");

teacher1.introduce();
teacher1.teach();