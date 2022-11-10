
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Pages/404/NotFound";
import AddService from "../Pages/Add Service/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import MyReviews from "../Pages/My Reviews/MyReviews";
import SignUp from "../Pages/Register/SignUp";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                    return fetch('http://localhost:5000/services');
                }
                ,
                element:<Home></Home>
            }
            ,
            {
                path:'/home',
                loader:async()=>{
                    return fetch('http://localhost:5000/services');
                }
                ,
                element:<Home></Home>
            }
            ,
            {
                path:'/services',
                loader:async()=>{
                    return fetch('http://localhost:5000/allServices');
                }
                ,
                element:<Services></Services>
            }
            ,
            {
                path:'/reviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
            ,
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/register',
                element:<SignUp></SignUp>
            }
            ,
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }
]);

export default router;