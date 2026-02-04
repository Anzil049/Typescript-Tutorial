interface User{
    id:number;
    name:string;
    email:string;
    password:string;
    isAdmin:boolean;
}

type updateUser=Partial<User>;
let userUpdate:updateUser={
    name:"Anzil",
    email:"anzil049@gmail.com"
}

console.log(userUpdate);