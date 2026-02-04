let userName: string = "Anzil";
let age: number = 21;
let isDeveloper: boolean = true;
let skills: string[] = ["HTML", "CSS", "JS", "Node", "Express", "MongoDB", "React", "Typescript"];
let user: [string, number] = ["Anzil", 21];

enum Status {
    success,
    failure,
    loading
}

let currentStatus: Status = Status.success

console.log(userName);
console.log(age);
console.log(isDeveloper);
console.log(skills);
console.log(user);
console.log(Status[currentStatus])