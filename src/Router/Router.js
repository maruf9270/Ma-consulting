import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
        path:'/'
        ,element:<MainLayout></MainLayout>
        ,children:[
            {
                index:true,
                element:<Homepage></Homepage>
            }
        ]
    }
])