import { createBrowserRouter } from "react-router-dom";
import LogIn from "../pages/LogIn/LogIn";

import Registration from "../pages/LogIn/Registration";
import Home from "../pages/Home/Home";

import Recipes from "../pages/Recipes/Recipes";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";


export const routes=createBrowserRouter([

    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
                
            },
            {
                path: '/register',
                element:<Registration></Registration>
                
            },
            {
                path:'/recipes',
                element:<Recipes></Recipes>
            },
            {
                path: '/chef-recipe/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/chef-recipe/${params.id}`)
               
            },
          
        ]
        
    },
    
    
        
    
    
])