import { useState } from "react"

//title
const Title=()=>{
    return(
        <a href="/">
            <img 
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
            alt="" 
            className="logo"
            />
        </a>
    )
}

// Header

const LoggedinUser=()=>{
    return true
}

const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            {
                isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
            }
            
            
        </div>
    </div>
    )
}

export default Header;