
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

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
            ,
            {
                path:'/home',
                element:<Home></Home>
            }
            ,
            {
                path:'/services',
                element:<Services></Services>
            }
            ,
            {
                path:'/addservice',
                element:<AddService></AddService>
            }
            ,
            {
                path:'/reviews',
                element:<MyReviews></MyReviews>
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
        ]
    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }
]);

export default router;