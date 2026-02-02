interface Student {
    name: string;
    readonly mark: number;
};


const students: Student[] = [
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
]


function checkResult(student: Student): string {
    return student.mark >= 40 ? "pass" : "fail"
}

function calculateGrade(student:Student):string{
    if(student.mark>=80){
        return "A";
    }else if(student.mark>=60){
        return "B"
    }else if(student.mark>=40){
        return "C"
    }else{
        return "D"
    }
}

students.forEach((student)=>{
    console.log(`${student.name}:${checkResult(student)},grade:${calculateGrade(student)}`);
});

