import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name,cuisines,totalRatings,cloudinaryImageId}) => {
  return (
    <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{totalRatings}</h4>
    </div>
  );
};
export default RestaurantCard;
