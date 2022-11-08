import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path:'/'
        ,element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>
        ,children:[
            {
                index:true,
                element:<Homepage></Homepage>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/review'
                ,element:<PrivetRoute><ReviewPage></ReviewPage></PrivetRoute>
            }
        ]
    }
])