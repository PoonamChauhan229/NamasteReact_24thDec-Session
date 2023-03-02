import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, IMG_CDN_URL } from "../constants";
import useRestaurant from "../utilis/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id)
  const restaurantMenuDetails=useRestaurant(id)
  return !restaurantMenuDetails ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restuarant-{id}</h1>
        <h2>{restaurantMenuDetails.name}</h2>
        <img
          src={IMG_CDN_URL + restaurantMenuDetails.cloudinaryImageId}
          alt=""
        />
        <h2>{restaurantMenuDetails.avgRating}</h2>
        <h2>{restaurantMenuDetails.costForTwoMsg}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantMenuDetails?.menu?.items).map((element) =>{
            console.log(element)
           return  <li key={element.id}>{element.name}</li>
          }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
