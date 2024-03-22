import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const [menu, setMneu] = useState("shop");
    // const { getTotalCartItems } = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                {/* <p>DUDS</p> */}
            </div>
            <ul className="nav-menu">
                <li ><Link to="/" style={{ textDecoration: "none" }} >Home</Link></li>
                <li ><Link style={{ textDecoration: "none" }}>About Us</Link> </li>
                <li><Link style={{ textDecoration: "none" }} >Product</Link> </li>
                {/* <li ><Link style={{ textDecoration: "none" }} >Kids</Link> </li> */}
            </ul>
            {<div className="nav-login-cart">
                <Link to='/login'><button><b>Download Our App</b></button></Link>
                {/* <Link to='/cart'><img src={cart_icon} alt="" /></Link> */}
                {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
            </div>}
        </div>
    )
}

export default Navbar
