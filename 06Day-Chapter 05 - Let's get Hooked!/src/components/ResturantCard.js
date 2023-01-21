import {IMG_CDN_URL} from "../contants"
const RestaurantCard=({cloudinaryImageId,name,cuisines,totalRatingsString})=>{
    // console.log(cloudinaryImageId,name,cuisines,totalRatingsString)
    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}
export default RestaurantCard;