"use client"
import { auth } from '@/firebase/config';
import {createContext, useContext, useEffect, useMemo, useState} from 'react'
//import {auth} from '@/firebase/config'
const Context = createContext({

});
/* eslint-disable @typescript-eslint/no-explicit-any */
type UserType ={
    user:any,
    isLogin: boolean

}

const AuthProviders = ({children}:any) =>{
    const initialState = useMemo(
        () => ({
          user: null,
          isLogin: false,
        }),
        []
      );

    const [user, setUser] = useState<UserType>(initialState);
    
    useEffect(()=>{
       
        const unsubscribe = auth.onAuthStateChanged((userState)=>{
            if(userState){
                setUser({ isLogin: true, user: userState });
            }else{
                setUser({ isLogin: false, user: null });
            }
        });
        
        return () => unsubscribe();
        
    },[])

 return(
    <Context.Provider value={{user, setUser}}>
       {children}
    </Context.Provider>
 )
}

export const AuthContext = ()=> useContext(Context);
export default AuthProviders;