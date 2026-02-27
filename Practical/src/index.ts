type Student={
    name:string,
    mark:number
}

let students:Student[]=[
    {name:"Anzil",mark:80},
    {name:"Anzil",mark:80},
    {name:"Anzil",mark:60},
    {name:"Anzil",mark:45},
    {name:"Anzil",mark:39},
    {name:"Anzil",mark:80},
    {name:"Anzil",mark:22},
    {name:"Anzil",mark:73},
    {name:"Anzil",mark:60},
];

function Markstatus(student:Student):string{
    return student.mark>40?"Pass":"Fail"
}

function Gradestatus(student:Student):string{
    if(student.mark>60){
        return "A"
    }else if(student.mark>50){
        return "B"
    }else if(student.mark>40){
        return "c"
    }else{
        return "D"
    }
}

students.forEach((student)=>{
    console.log(`${student.name}:${Markstatus(student)},${Gradestatus(student)},${student.mark}`)
})

