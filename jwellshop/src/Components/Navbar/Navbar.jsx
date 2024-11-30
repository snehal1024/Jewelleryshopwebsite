import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/shopping-bag.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'

const Navbar = () => {
    const [menu,setmenu]=useState("Home");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef =useRef();

    const dropdown_toggle=(e)=>
    {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="logo" />
    </div>
    <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setmenu("Home")}}><Link style={{textDecoration:'none'}} to ='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Ring")}}><Link style={{textDecoration:'none'}} to='/Ring'>Ring</Link>{menu==="Ring"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Necklace")}}><Link style={{textDecoration:'none'}} to='/Necklace'>Necklace</Link>{menu==="Necklace"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Earring")}}><Link style={{textDecoration:'none'}} to='/Earring'>Earring</Link>{menu==="Earring"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Bangle")}}><Link style={{textDecoration:'none'}} to='/Bangle'>Bangle</Link>{menu==="Bangle"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart} alt="cart icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar