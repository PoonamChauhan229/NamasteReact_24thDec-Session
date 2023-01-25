import { useEffect, useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";

function filterData(searchText, restaurant) {
  let filtereddata = restaurant.filter((element) =>
    element.data.name.includes(searchText)
  );
  return filtereddata;
}

// Body
const Body = () => {
  // const searchTxt="KFC"
  // search text is local variable
  const [searchText, setSearchText] = useState(""); //create state variable.
  const [restaurant, setRestaurant] = useState(resturantList);

  useEffect(()=>{
    console.log("call this when dependancy is changed")
  },[])

  return (
    <>
      {/* search */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            //filter
            const data = filterData(searchText, restaurant);
            //update
            setRestaurant(data);
          }}
          className="search-btn"
        >
          Search
        </button>
        <h4>{searchText}</h4>
      </div>
      <div className="resturant-list">
        {restaurant.map((element) => {
          return <ResturantCard {...element.data} key={element.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
