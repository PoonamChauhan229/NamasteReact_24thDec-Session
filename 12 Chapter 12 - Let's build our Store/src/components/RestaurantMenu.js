import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL } from "../constants";
import useRestaurant from "../utilis/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams()
    console.log(id);
    const restaurantMenuDetails=useRestaurant(id)
  
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
      </div>
      <div className="menu-list">
        {Object.values(restaurantMenuDetails?.menu?.items).map(
          (element) =><li key={element.id}>{element.name}</li>
        )} 
      </div>
    </div>
  );
};

export default RestaurantMenu;
