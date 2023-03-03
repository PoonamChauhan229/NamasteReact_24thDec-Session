// Restaurant Menu
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (id) => {
    console.log(id)
    console.log(FETCH_MENU_URL+id)
    const [restaurantMenuDetails, setRestaurantMenuDetails] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    let data = await fetch(FETCH_MENU_URL+id);
    let json = await data.json();
    console.log(json?.data);
  }


  return restaurantMenuDetails;
}

export default useRestaurant