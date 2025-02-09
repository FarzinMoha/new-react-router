import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/profile',
        element:<ProfilePage/>
      },
      
    ],
  },
  {
    element: <AuthLayout />,
    children:[
      {
        path:'/sign-in',
        element:<SignIn/>
      },
      {
        path:'/sign-up',
        element:<SignUp/>
      },
      
    ],
  },
]);

export default Router
