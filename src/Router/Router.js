import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/'
        ,element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>
        ,children:[
            {
                index:true,
                element:<Homepage></Homepage>
            }
        ]
    }
])