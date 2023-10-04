import './NavBar.css'
import React from 'react'
import cartImg from './icons8-cart-100.png'
import { Link } from 'react-router-dom';

function NavBar() { 
    return (  
        <div className="NavBar">    
                <div className="logo"><Link to={'/'}>Flipkart</Link> </div>
                
                <input id='search' type="text" placeholder="Search for products, brands and more" />
                
                <Link to={'/login'} id ='login'>Login</Link>
                
                <Link to={"/incomplete"} id='seller'>Become a Seller</Link>
                
                <Link to={"/incomplete"}>More</Link>
                
                <Link to={'/cart'} id="cartdiv"><img src={cartImg} id='cart' /> Cart</Link>
                
          
        </div>
     );
}

export default NavBar;