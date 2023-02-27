import React, { useEffect, useState } from "react";
import { resturantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurant) {
  let fData = restaurant.filter((element) =>
    element?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(filtereddata)
  return fData;
}

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [allrestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allrestaurants) return null; //early return=> not render component

  // if (filteredRestaurants?.length === 0) return <h1>No Resturants Found</h1>;

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data

            const data = filterData(searchText, allrestaurants);
            //update the data
            setfilteredRestaurants(data);
            console.log(allrestaurants, searchText);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((element) => {
          return (
            <Link to={"/restaurant/"+element.data.id} key={element.data.id}>
              <RestrauntCard {...element.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
