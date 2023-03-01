import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filteredData(searchTxt,allRestaurant){
    return allRestaurant.filter((element)=>element.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
}
const Body = () => {
    const [allRestaurant,setAllRestaurant]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchTxt,setSearchTxt]=useState("")

    useEffect(()=>{
        getRestaurantData()
    },[])

    async function getRestaurantData(){
        let res =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        let json=await res.json()
        //console.log(json)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
       // console.log(json?.data?.cards[2]?.data?.data?.cards)
       
    }

    return allRestaurant.length===0?<Shimmer/>:
  (
    <>
    <div className="search-container">
      <input type="text" name="" id=""  value={searchTxt}
      onChange={(e)=>setSearchTxt(e.target.value)}
      />{" "}
      <button onClick={()=>{
        // filter data
        let data=filteredData(searchTxt,allRestaurant)
        console.log(data)
        // update data
        setFilteredRestaurant(data)
      }
      }>Search</button>
      {searchTxt}
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((element) => {
          return <RestaurantCard {...element.data} key={element.data.id}/>;
        })}
      </div>
    
    </>
  )
  ;
};
export default Body;
