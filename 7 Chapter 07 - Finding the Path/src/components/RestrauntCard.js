import React from "react";
import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, totalRatingsString }) => {
console.log(IMG_CDN_URL)
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name} </h2>
            <h3>{cuisines.join(" , ")} </h3>
            <h4>{totalRatingsString} stars</h4>
        </div>
    );
};
export default RestrauntCard