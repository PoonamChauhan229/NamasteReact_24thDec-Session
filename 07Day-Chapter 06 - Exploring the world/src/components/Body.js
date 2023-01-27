import { useEffect, useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurant) {
  let filtereddata = restaurant.filter((element) =>
    element?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filtereddata;
}

// Body
const Body = () => {
  // const searchTxt="KFC"
  // search text is local variable
  const [searchText, setSearchText] = useState(""); //create state variable.
  // const [restaurant, setRestaurant] = useState(resturantList);
  const [allrestaurant, setAllRestaurant] = useState([]);//all resturants
  const [fliteredResturant,setFilteredResturant]=useState([])//flietred resturant


  useEffect(()=>{
      getRestaurant()
  },[])

  async function getRestaurant(){
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json=await data.json()
    console.log(json)
    // optional chainging
    setAllRestaurant(json.data?.cards[2]?.data?.data?.cards)  
    setFilteredResturant(json.data?.cards[2]?.data?.data?.cards) 
  }

  if(!allrestaurant) return null;//early return=> not render component

  if(fliteredResturant?.length===0) return <h1>No Resturants Found</h1>

  return allrestaurant.length===0?<Shimmer/>:(
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
            const data = filterData(searchText, allrestaurant);
            //update
            setFilteredResturant(data);
          }}
          className="search-btn"
        >
          Search
        </button>
        <h4>{searchText}</h4>
      </div>
      <div className="resturant-list">
        {/* write logic here for no resturant found */}
        {
        fliteredResturant.map((element) => {
          return <ResturantCard {...element.data} key={element.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
