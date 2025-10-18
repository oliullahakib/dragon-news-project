import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:"/category/:id",
                Component:CategoryNews,
                loader:()=>fetch("/news.json"),
                hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>
            }
        ]
    }
])