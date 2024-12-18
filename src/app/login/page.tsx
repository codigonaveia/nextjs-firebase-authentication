'use client'
import { ROUTER_REGISTER, ROUTGER_DASHBOARD } from "@/constants/router";
import Link from "next/link";
import React, {useState } from "react";
import {useRouter} from 'next/navigation'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/config'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswod] = useState('');
    const [error, setError] = useState<string | null>(null);;
    const router = useRouter();
    const [signInUserWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    
    const handleSubmit = async (e:React.FormEvent)=>{
         e.preventDefault();
         setError(null)
         console.log("teste", auth.config)
         try{
          const response = await signInUserWithEmailAndPassword(email,password);
          console.log("Response", response)
          if(response!=null){
           
           router.push(ROUTGER_DASHBOARD)
          }else{
            setError("Usuário ou senha invalida")
            setEmail('');
            setPasswod('');
          }
        }catch(err){
          if(err){
           
              setError("Usuário não encontrado");
            
          }

        }
    }
   
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)] bg-gray-600">
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Login</h5>
      <hr/>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900 py-4">E-mail:</label>
        <input 
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Entre com seu e-mail"
         type="email"
         name="email"
         id="email"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
        />
        <label className="block text-sm font-medium leading-6 text-gray-900 py-4">Senha</label>
         <input 
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Entre com sua senha"
         type="password"
         name="password"
         id="password"
         value={password}
         onChange={(e)=>setPasswod(e.target.value)}
        />
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="bg-blue-900 w-full py-3 rounded-lg text-white">Login</button>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
         <span>Ainda não tem uma conta ?
         <Link href={ROUTER_REGISTER} className="font-sans text-blue-800 size-10">
          Clique aqui
         </Link>
         </span>
        
        </div>
        
      </form>
      {error && <p style={{ color: 'red', textAlign:'center' }}>{error}</p>} 
     
    </div>
  </div>

  );
};

export default Login;
