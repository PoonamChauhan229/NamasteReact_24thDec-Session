import React, { Children } from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"


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
        children:[{
            path:"/about",
            element:<About/>
        },{
            path:"/",
            element:<Body/>
        },{
            path:"/contact",
            element:<Contact/>
        }
    ]

    }
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)