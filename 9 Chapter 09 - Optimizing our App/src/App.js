import React, { lazy, Suspense } from "react"
import ReactDOM  from "react-dom/client"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { lazy } from "react";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurauntMenu";
import Shimmer from "./components/Shimmer";

// Upon on Demand Loading=> upon render=> suspend loading
// whereever we have import statements there we should have lazy loading 

const Instamart = lazy(() => import("./components/Instamart"));
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
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Instamart/>
                  </Suspense>
                ),
              },
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

