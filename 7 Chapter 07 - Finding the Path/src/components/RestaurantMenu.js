import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const params = useParams(); //object
  console.log(params);
  const { id } = params;
  console.log(id);

  const [restaurants, setRestaurants] = useState(null);

  async function getRestaurantInfo() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+id
    );
    let json = await data.json();

    setRestaurants(json?.data);
    // console.log(json);
  }
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  console.log(restaurants);

  if (!restaurants) {
    return <Shimmer />;
  }
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h2>{restaurants.name}</h2>
        <img src={IMG_CDN_URL + restaurants.cloudinaryImageId} alt="" />
        <h3>{restaurants.area}</h3>
        <h3>{restaurants.avgRating} stars</h3>
        <h3>{restaurants.area}</h3>
        <h3>{restaurants.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurants?.menu?.items).map((element) => {
            // console.log(element);
            return <li key={element.id}>{element.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
