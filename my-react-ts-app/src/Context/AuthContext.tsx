import { createContext, useState, type ReactNode } from "react";

type AuthContextType={
    isLoggedIn:boolean;
    login:()=>void;
    logout:()=>void;
}

export const AuthContext=createContext<AuthContextType | null>(null);

type AuthProviderProps={
    children:ReactNode;
};

export const AuthProvider=({children}:AuthProviderProps)=>{
    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);

    const login=()=>{
        setIsLoggedIn(true);
    };

    const logout=()=>{
        setIsLoggedIn(false);
    };

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}