import React, { useContext } from 'react'
import { IMG_CDN_URL } from '../constants'
import UserContext from '../utilis/UserContext'

const RestaurantCard = ({name,cloudinaryImageId,totalRatingsString,cuisines}) => {
  const {user}=useContext(UserContext)
  return (
    <div className='card'>
      <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{user.name}-{user.email}</h4>
    </div>
  )
}

export default RestaurantCard