import { useParams } from "react-router-dom"

const RestaurantMenu=()=>{
    // how to read a dynamic 
    const params=useParams()//object
    console.log(params)
    const {id}=params
    console.log(id)
    return(
        <div>
            <h1>Restaurant Id: {id}</h1>
            <h2>Namaste</h2>
        </div>
    )
}
export default RestaurantMenu