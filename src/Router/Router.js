import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FullServices from "../Pages/FullServices/FullServices";
import Login from "../Pages/Login/Login";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
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
                element:<Homepage></Homepage>,
                loader: ()=>fetch('https://ma-consulting-three.vercel.app/services?limit=3')
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
            },
            {
                path: '/service/details/:id'
                ,element: <ServiceDetails></ServiceDetails>
                ,loader: ({params})=>fetch(`https://ma-consulting-three.vercel.app/service/details?id=${params.id}`)
            }
            ,{
                path:'/services',
                element:<FullServices></FullServices>
                ,loader:()=>fetch('https://ma-consulting-three.vercel.app/services?limit=0')
            }
        ]
    }
])