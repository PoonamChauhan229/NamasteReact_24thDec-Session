import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import useOnline from '../utilis/useOnline'
import UserContext from '../utilis/UserContext'
import { useSelector } from 'react-redux'


const Title=()=>{
  return <img src={logo} alt="" className='logo'/>
}
const Header = () => {

  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems)
  const {user}=useContext(UserContext)

  const isOnline=useOnline()
  return (
    <div className='header'>
      <Title/>
      <div className='nav-items'>
        {user.name}-{user.email}
        <ul>
          <li>{isOnline?"✅":"🔴"}</li>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/contact'><li>Contact Us</li></Link>
          <Link to='/instamart'><li>Instamart</li></Link>
          <Link to='/cart'><li>Cart- {cartItems.length}items</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header