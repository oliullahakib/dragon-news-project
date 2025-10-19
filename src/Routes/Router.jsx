import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Layouts/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import UpCommingPage from "../components/UpCommingPage";

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
                hydrateFallbackElement:<LoadingPage/>
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
        element:<PrivateRoute><NewsDetails/></PrivateRoute>,
        loader:()=>fetch('/news.json'),
        hydrateFallbackElement:<LoadingPage/>
    },
    {
        path:'/about',
        Component:UpCommingPage
    }
    ,
    {
        path:'/career',
        Component:UpCommingPage
    }
    ,
    {
        path:'/*',
        Component:ErrorPage
    }
])