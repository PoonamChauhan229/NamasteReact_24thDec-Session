import React, { useEffect, useState } from "react";
const useRestaurant = (id) => {
  const [restaurantMenuDetails, setRestaurantMenuDetails] = useState(null);
  const FETCH_MENU_URL="https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  console.log(FETCH_MENU_URL + id);
  async function getRestaurantInfo() {
    let data = await fetch(FETCH_MENU_URL+id)
    let json = await data?.json();
    console.log(json?.data);
    setRestaurantMenuDetails(json?.data);

    //console.log(json?.data?.menu?.items);
    //console.log(Object.values(json?.data?.menu?.items))
  }
  return restaurantMenuDetails;
};

export default useRestaurant;
