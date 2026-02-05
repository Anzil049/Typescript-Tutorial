import loggerMiddleware from "./middleware/logger";
import { User } from "./types/User";
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.post("/users", (req: Request, res: Response) => {
    const {name,email,age}=req.body as Partial<User>;


    if(!name ||!email ||!age){
        return res.status(400).json({
            message:"please provide name,email,age"
        })
    }

    if(typeof name!=="string"){
        return res.status(400).json({message:"name should be string"});
    }
    if(typeof email!="string"){
        return res.status(400).json({message:"email should be string"})
    }
    if(typeof age!="number"){
        return res.status(400).json({message:"age should be number"})
    }

    const newUser:User={
        name,
        email,
        age
    }

    return res.status(201).json({message:"User created successfully",
        user:newUser,
    })
})

app.listen(PORT,()=>{

    console.log(`Server running on http://localhost:${PORT}`)

})

