import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    // const [isAuth,seIsAuth] = useState<string | null>(null)
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     const token = localStorage.getItem('auth')
    //     if(token){
    //         seIsAuth(token)
    //     }else{
    //         navigate('/sign-in')
    //     }
    // },[])
  return (

    <div className="w-full bg-amber-600 flex justify-center items-center">
        <Outlet/>
    </div>
  )
}
