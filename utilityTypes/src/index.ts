interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}


//Partial

type updateUser = Partial<User>;
let userUpdate: updateUser = {
    name: "Anzil",
    email: "anzil049@gmail.com"
}

console.log(userUpdate);


//Pick

type userProfile = Pick<User, "id" | "name" | "email">
let profileUser: userProfile = {
    id: 100,
    name: "Anzil",
    email: "anzil049@gmail.com"
}

console.log(profileUser);


//Omit
type safeUser = Omit<User, "password">
let userSafe: safeUser = {
    id: 200,
    name: "Anzil",
    email: "anzil049@gmail.com",
    isAdmin: true,
}

console.log(userSafe);