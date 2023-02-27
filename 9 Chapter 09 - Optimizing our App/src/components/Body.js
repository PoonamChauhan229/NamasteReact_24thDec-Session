import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { filteredData } from "../../utilis/helper";
import useOnline from "../../utilis/useOnline";
const Body=()=>{
    const [searchTxt,setSearchTxt]=useState("")
    const [allrestaurant,setAllRestaurant]=useState([])
    const [filteredRestaurant,setfilteredRestaurant]=useState([])

    useEffect(()=>{
        getRestaurant()
    },[])

    async function getRestaurant(){
        let res =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        let json=await res.json()
       // console.log(json.data.cards[2].data.data.cards)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    // const offline=true

    //const isOnline=useOnline()
    // if(!isOnline){
    //     return <h1>🔴Offline, Please check your Internet Connection</h1>
    // }
return allrestaurant.length===0?<Shimmer/>:(
    
    <>
        <div className="search-container">
            <input type="text" name="" id=""
            value={searchTxt} 
            onChange={(e)=>{
                console.log(e.target.value)                
                setSearchTxt(e.target.value)}
            }
            />
            <button onClick={()=> {
                let data=filteredData(allrestaurant,searchTxt)
                setfilteredRestaurant(data)
            }
            }>Submit</button>
        </div>
       <div className="restaurant-list">
     {
        filteredRestaurant.map((element)=>{
            return(
                <Link to={'/restaurant/'+element.data.id} key={element.data.id}>
                    <RestaurantCard {...element.data} />
                </Link>
            ) 
        })
     }
       </div>
    </>
)
}
export default Body;