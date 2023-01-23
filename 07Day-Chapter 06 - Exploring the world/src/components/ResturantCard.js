import { resturantList ,IMG_CDN_URL} from "../constants"


// ResturantCard
const ResturantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
    // const {name,cuisines,avgRating,cloudinaryImageId}=restaurant
    // console.log(props)
   return(
       <div className="card">
         <img 
         src={IMG_CDN_URL + cloudinaryImageId}
         alt="" />
         <h2>{name}</h2>
         <h3>{cuisines.join(",")}</h3>
         <h4>{avgRating} Ratings</h4>
       </div>
   )
}
export default ResturantCard;