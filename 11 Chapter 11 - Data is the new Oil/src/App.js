import React, { Children, Suspense,lazy, useState } from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utilis/UserContext"

const Instamart=lazy(()=>import('./components/Instamart'))

const AppLayout=()=>{
    const [user,setUser]=useState({
        name:"Poonam Chauhan",
        email:"poonam@gmail.com"
    })
    return(
        <UserContext.Provider value={{user:user,setUser:setUser}}>
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
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