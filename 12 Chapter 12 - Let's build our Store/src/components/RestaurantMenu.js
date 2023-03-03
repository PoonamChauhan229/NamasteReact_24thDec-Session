import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL } from "../constants";
import { addItem } from "../utilis/cartSlice";
import useRestaurant from "../utilis/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams()
    console.log(id);
    const restaurantMenuDetails=useRestaurant(id)

    const  dispatch=useDispatch()
    const handleAdditem=()=>{
      // when click on add button it should dispatch an action
      dispatch(addItem("grapes"))
    }

    const addFoodItem=(item)=>{
      dispatch(addItem(item))
    }
  
  //console.log(restaurantMenuDetails);
  return !restaurantMenuDetails?<Shimmer/>:(
    <div className="menu">
      <div>
        <h2>RestaurantMenu-{id}</h2>
        <h4>{restaurantMenuDetails?.name}</h4>
        <img
          src={IMG_CDN_URL + restaurantMenuDetails?.cloudinaryImageId}
          alt=""
        />
        <h3>{restaurantMenuDetails?.costForTwoMsg}</h3>
        <h3>{restaurantMenuDetails?.city}</h3>
        <h3>{restaurantMenuDetails?.avgRating}</h3>
        {/* <div>
          <button onClick={()=>{
            handleAdditem()
          }}>Add item</button>
        </div> */}
      </div>
      <div className="menu-list">
        {Object.values(restaurantMenuDetails?.menu?.items).map(
          (element) =><li key={element.id}>{element.name}- <button onClick={()=>addFoodItem(element)}>Add item</button></li>
        )} 
      </div>
    </div>
  );
};

export default RestaurantMenu;
