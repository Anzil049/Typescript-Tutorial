import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"

const AuthStatus =()=>{
    const auth= useContext(AuthContext);

    if(!auth) return null;

    return(
        <>
            <p>{auth.isLoggedIn?"Logged In":"Logged Out"}</p>
            <button onClick={auth.login}>Login</button>
            <button onClick={auth.logout}>Logout</button>
        </>
    )
}

export default AuthStatus;