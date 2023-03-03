import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import RestaurantMenu from './components/RestaurantMenu'
import { lazy,Suspense } from 'react'
import UserContext from './utilis/UserContext'

const Instamart=lazy(()=>import('../src/components/Instamart'))

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
            },{
                path:"/",
                element:<Body/>
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurant/:id",
               element:<RestaurantMenu/>
            },{
                path:"/instamart",
                element:(
                    <Suspense>
                    <Instamart/>
                </Suspense>
                )
            }
        ]
    }
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)