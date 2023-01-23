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

const Header=()=>{
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
        </div>
    </div>
    )
}

export default Header;