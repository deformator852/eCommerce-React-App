import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import logo from "../assets/images/header-logo.png";
import headerAccountAlert from "../assets/images/header-account-alert.png";
import headerSearch from "../assets/images/header-search.png";
import headerLiked from "../assets/images/header-liked.png";
import headerShoppingCart from "../assets/images/header-shopping-cart.png";
import Shop from "../pages/Shop";
function Header() {
  return (
    <header className="header">
      <navigation>
        <nav>
          <Link className="logo" to="/">
            <img className="asd" src={logo} alt="image" />
          </Link>
        </nav>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/shop" element={<Shop />}>Shop</Link>
        </nav>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/contact">Contact</Link>
        </nav>
      </navigation>
      <div className="user-services">
        <p className="">
          <img src={headerAccountAlert} alt="image" />
        </p>
        <p className="">
          <img src={headerSearch} alt="image" />
        </p>
        <p className="">
          <img src={headerLiked} alt="image" />
        </p>
        <p className="">
          <img src={headerShoppingCart} alt="image" />
        </p>
      </div>
    </header>
  );
}
export default Header;
