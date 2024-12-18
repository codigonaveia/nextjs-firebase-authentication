"use client"
import 
{ ROUTER_HOME, 
  ROUTER_LOGIN, 
  ROUTER_REGISTER, 
  ROUTGER_DASHBOARD, 
  ROUTGER_PROFILE } from "@/constants/router";
import { auth } from "@/firebase/config";
import { AuthContext } from "@/providers/AuthProviders";
import { signOut } from "firebase/auth";
//import { AuthenticationType } from "@/types/AuthenticationTyple";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/navigation'




//uma das opções é usar conforme abaixo:
//const Header = ({isAuthenticated}:{isAuthenticated:boolean})=>{

//Segunda opçao
// type HeaderProps = {
//     isAuthenticated: boolean;
//   };
  
//   const Header = ({ isAuthenticated }: HeaderProps) => {


const Header = ()=>{
       //const isAuthenticated = false
       /* eslint-disable @typescript-eslint/no-explicit-any */
       const {user}:any = AuthContext();
      const router = useRouter();
       const LogOut = ()=>{
        signOut(auth).then((response)=>{
          console.log("response", response)
        }).catch((e)=>{
          console.log("logout", e.message)
        })
         router.push(ROUTER_LOGIN)
       }
       console.log("estate", user.user)
    return(
        <div className="bg-gray-700 size-full h-24">
            <div className="flex justify-between items-center h-full px-4">
            <div className="text-white">
                <Link href={ROUTER_HOME}>
                <Image className="w-auto h-auto" src="/assets/Alcateia-transparente.png" alt="logo" width={100} height={100}/>
                </Link>
                
            </div>
             
             <ul className="flex space-x-4 text-white">
              {!user?.isLogin ? (
               <>
               <Link href={ROUTER_LOGIN}><li>Login</li></Link>
               <Link href={ROUTER_REGISTER}><li>Registrar</li></Link>
              
               </>

              ):(
              <>
              <Link href={ROUTGER_PROFILE}><li>Perfil</li></Link>
              <Link href={ROUTGER_DASHBOARD}><li>Dashboard</li></Link>
              <li className="cursor-pointer" onClick={LogOut}>Sair</li>
              </>
              )}
             </ul>
            </div>
           
        </div>
    )
}
export default Header