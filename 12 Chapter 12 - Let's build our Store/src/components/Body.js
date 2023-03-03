import React, { useEffect, useState } from 'react'
import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { filteredData } from '../utilis/helper'

const Body = () => {
const [allRestaurant,setAllRestaurant]=useState([])
const[filteredRestaurant,setFilteredRestaurant]=useState([])
const[searchTxt,setSearchTxt]=useState("")
  
useEffect(() => { 
  getRestaurant();
  }, []); 

  async function getRestaurant(){
    let res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let json=await res.json()
   // console.log(json)
    setAllRestaurant(json.data.cards[2].data.data.cards)
    setFilteredRestaurant(json.data.cards[2].data.data.cards)
  }
  return allRestaurant.length===0?<Shimmer/>:(
    <>
    <div className='search-container'>
      <input type="text" name="" id="" value={searchTxt} 
      onChange={(e)=>{setSearchTxt(e.target.value)}}
      />
      <button onClick={()=>{
        //filtered data
        let data=filteredData(allRestaurant,searchTxt)
        //update the data
        setFilteredRestaurant(data)
      }}>Search</button>
    </div>
    <div className='restaurant-list'>
      {
        filteredRestaurant.map((element)=>{
          //console.log(element)
          return <Link to ={'/restaurant/'+element.data.id}><RestaurantCard {...element.data} key={element.data.id}/></Link>
        })
      }
    </div>
    
    </>
  )
}

export default Body