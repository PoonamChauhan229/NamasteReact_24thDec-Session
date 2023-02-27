import React, { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../src/constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  //    Get the data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    let data = await fetch(FETCH_MENU_URL+ id);
    let json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  // Return the data
  return restaurant
};

export default useRestaurant;
