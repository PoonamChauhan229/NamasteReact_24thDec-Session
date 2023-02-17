import React from "react";
import ReactDOM from "react-dom/client";
import Body  from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";




const AppLayout = () => {
  return (
    <>
      <Header/>
  {/* Outlet =>Middle ortion to be changed as per my Route
  All the childrens will go this outlet
  Amazing part is pag is not getting refreshed

  */}
  <Outlet/>
    <Footer/>
    </>
  );
};

const appRouter=createBrowserRouter([
  // its takes an configuration
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
        path:"/",
        element:<Body/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  
  },
  
  
  ])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)
