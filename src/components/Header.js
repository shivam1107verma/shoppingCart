// import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import "./Header.css"


const Header = () => {
  // const products = useSelector(state => state.cartState.cartList)

  return (
    <header>
      <Link to="/" className="logo">       
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>    
    </header>
  )
}
export default Header