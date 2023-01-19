import React from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./components/Header";
//namned import=> exported by name
// basically extracting from Header file
// import { Title } from "./components/Header";

import Footer from "./components/Footer";
import Body from "./components/Body";
const AppLayout=()=>{
    return(
        <>            
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
 
// 36 min done