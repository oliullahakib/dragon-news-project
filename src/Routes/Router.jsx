import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Layouts/NewsDetails";

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
    },
    {
       path:"/auth",
       Component:AuthLayout,
       children:[
        {
            path:"/auth/login",
            Component:Login
        },
        {
            path:"/auth/register",
            Component:Register
        }
       ]
    },
    {
        path:"/news-details/:id",
        Component:NewsDetails,
        loader:()=>fetch('/news.json')
    }
])