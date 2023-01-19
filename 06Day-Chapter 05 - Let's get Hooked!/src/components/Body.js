import { resturantList } from "../contants"
import RestaurantCard from "./ResturantCard"
const Body=()=>{
    return(
        <div className="resturant-list">
            {
                resturantList.map((element)=>{
                   return <RestaurantCard {...element.data} key={element.data.id}/>
                })
            }
        </div>
        
    )
}
export default Body;