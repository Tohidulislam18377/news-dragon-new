import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../LayOut/NewsLayOut";
import News from "../pages/News/News/News";
import LoginLayOut from "../LayOut/LoginLayOut";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";



const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'singUp',
                element: <SingUp />
            },
            {
                path: 'terms',
                element: <Terms />
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayOut></NewsLayOut>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute> <News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }

]);

export default router;