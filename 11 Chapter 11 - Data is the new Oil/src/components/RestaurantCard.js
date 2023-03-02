import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utilis/UserContext";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,totalRatingsString}) => {
 const {user}=useContext(UserContext)
  return (
    <>
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{totalRatingsString}</h4>
            <h6>{user.name}-{user.email}</h6>
        </div>
    </>
  )
};
export default RestaurantCard;
