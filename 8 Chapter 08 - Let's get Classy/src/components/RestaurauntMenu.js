import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const {id}=useParams()
    console.log(id)

    const[restaurant,setRestaurant]=useState(null)
    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        let data=await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId='+id)
        let json=await data.json()
        console.log(json.data)
        setRestaurant(json.data)

    }
    if(!restaurant){
        return <Shimmer/>
    }
    return !restaurant ?(<Shimmer/>):(
        
        <div className="menu">
        <div>
        <h1>Restaurant{id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="" />
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((element)=>{
                    return <li key={element.id}>{element.name}</li>
                })}
            </ul>
        </div>
        </div>
    )
}
export default RestaurantMenu;