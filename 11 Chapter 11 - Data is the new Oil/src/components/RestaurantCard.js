import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,totalRatingsString}) => {
  return (
    <>
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{totalRatingsString}</h4>
        </div>
    </>
  )
};
export default RestaurantCard;
