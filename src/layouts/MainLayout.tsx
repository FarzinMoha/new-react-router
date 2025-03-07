import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Header from "../components/header/Header"
import Loading from "../components/Loading"

export default function MainLayout() {
  const data = useLoaderData()
  const navigate = useNavigate()
  if(!data) navigate('/sign-in')

  return (
    <div className=" w-full text-txt">
      {data ? 
        <>
          <Header/>
          <Outlet/>
        </>
        :
        <div className=" w-full h-screen flex justify-center items-center ">
          <Loading size={30} className=" text-primary" />
        </div>
      }
    </div>
  )
}