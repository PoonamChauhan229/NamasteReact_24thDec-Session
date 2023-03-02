import { useContext } from "react"
import UserContext from "../utilis/UserContext"

const Footer=()=>{
    const {user}=useContext(UserContext)
    return(
        <div>
            <h4>This site is developed by {user.name} and {user.email}</h4>
        </div>
    )
}
export default Footer