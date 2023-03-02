import React, { Children, Suspense,lazy } from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RestaurantMenu from "./components/RestaurantMenu"

const Instamart=lazy(()=>import('./components/Instamart'))

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
            },{
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },{
                path:"/instamart",
                element:(
                    <Suspense fallback={<div>Loading....</div>}>
                        <Instamart/>
                    </Suspense>
                )
            }
            
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)