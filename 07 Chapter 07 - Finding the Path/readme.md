- Routing:
npm i react-router-dom

# Features to be build:
- About US Page
- Contact Us Page
and see how routing works.

/about=> take to route aboute page
so we need to create routing configuration

createBrowserRouter import this from react-router-dom

#
const appRouter=createBrowserRouter([
  // its takes an configuration
  {
    path:"/",
    element:<AppLayout/>
  
  },
  {
    path:"/about",
    element:<About/>
  }
  
  ])
  We need to provide appRouter to the App
  so how to do it?
  there is a component RouterProvider from react-router-dom

  We were rendering, Applayout
  but we dont want to render Applayout again and again,
  we want to render according to our path.

  instead of Applayout render the appRouter.

Error Reading:

 import { useRouteError } from "react-router-dom";


SPA:
Single Page Application:
REact Applications are SPA

 2types of Routing:
 Clientside Routing
 Serverside Routing

 Clientside Routing:
 In react app, we will build an clientside.
 according to the route we will just load the components

 We want to create SPA and we dont want to reload our page.

 Serverside Routing:
 All the pages will come from the server side.
 It makes an network call get the data

 Nested Routing:
 If we load about us page , where is header and footer 
 anywhere i go , i need header and footer.
 create childern


 Outlet

 Dynamic Segments/Dynamic Routing

