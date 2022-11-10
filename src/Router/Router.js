import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../MainLayout/MainLayout";
import Addservice from "../Pages/AddService/Addservice";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FullServices from "../Pages/FullServices/FullServices";
import Login from "../Pages/Login/Login";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import SingleEeviewEdit from "../Pages/ServiceDetails/Reviews/SingleRview/SingleEeviewEdit/SingleEeviewEdit";
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
                path:'/myreviews'
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
            },
            {
                path:'/editreview/:ID'
                ,element:<PrivetRoute><SingleEeviewEdit></SingleEeviewEdit></PrivetRoute>
                ,loader:({params})=>fetch(`https://ma-consulting-three.vercel.app/editreview?id=${params.ID}`)
            },
            {
                path:'/addservice',
                element:<PrivetRoute><Addservice></Addservice></PrivetRoute>,
                loader: ()=>fetch('https://ma-consulting-three.vercel.app/total')

            }
        ]
    }
])