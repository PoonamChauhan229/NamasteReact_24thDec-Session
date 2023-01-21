import { useState } from "react"
import { resturantList } from "../contants"
import RestaurantCard from "./ResturantCard"

function filterData(searchText,resturants){
const data=resturants.filter((restaurant)=>restaurant.data.name.includes(searchText))
// console.log(filterData)
return data;

}
const Body=()=>{

    const[resturants,setResturants]=useState(resturantList)
    const [searchText,setsearchText]=useState("")// to create state varibles
    // returns an array , ist is the variablename
    // SearchText is a local state variable

    return(
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                    }                    
                    }
                />
                <h1>{searchText}</h1>
                <button onClick={()=>{               
                    const data=filterData(searchText,resturants);
                    setResturants(data);
                    console.log(data)
                }}>Search</button>
            </div>
            <div className="resturant-list">
                {
                    resturants.map((element)=>{
                    return <RestaurantCard {...element.data} key={element.data.id}/>
                    })
                }
            </div>
        </>
        
    )
}
export default Body;