import React, { Children } from "react"
import ReactDOM  from "react-dom/client"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurauntMenu";
const AppLayout=()=>{
return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
}



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

