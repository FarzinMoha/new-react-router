import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/header/Header"
import { useEffect, useState } from "react";


export default function MainLayout() {
  console.log('MainLayout');
  const [isAuth,seIsAuth] = useState<string | null>(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
      const token = localStorage.getItem('auth')
      if(token){
          seIsAuth(token)
      }else{
          navigate('/sign-in')
      }
  },[])
  
  return (
    <div className=" w-full">
      {isAuth && 
        <>
          <Header/>
          <Outlet/>
        </>
      }
    </div>
  )
}