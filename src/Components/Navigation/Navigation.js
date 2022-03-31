import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";
import "./navigation.css";
import { BsFillMoonFill, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import useWindowSize from "../../hooks/useWindowSize";
import Sidebar from "../Sidebar/Sidebar";

const activeLinks = {
  backgroundColor: "#7e22ce",
  color: "#ede9fe",
};

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  const page = useWindowSize();

  return (
    <header className="navigationHeader">
      <nav>
        {/* logo and menu for small screens */}
        <div className="logo-menu">
          {/* Hamburger menu */}
          <div className="ham-menu">{page.isMobile ? <Sidebar /> : null}</div>
          {/* logo */}
          <div className="nav-logo">
            <BsFillMoonFill />
          </div>
        </div>
        {/* navbar items and links */}
        {page.isMobile ? null : (
          <div className="navbar-links">
            <ul className="navigationLinks">
              <li>
                <NavLink
                  to="/"
                  activeStyle={activeLinks}
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  activeStyle={activeLinks}
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeStyle={activeLinks}
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {/* cart icon and number of items in cart  */}
        <div className="cart-profile">
          <div className="cartLinkBadge">
            <NavLink to="/cart">
              <BsCart3 className="cart-icon" />
            </NavLink>
            <span className="cartCount">{cart.length}</span>
          </div>
          {/* sign up and login */}
          <div>
            <NavLink to={userData ? "/profile" : "/login"}>
              {userData ? (
                <BsFillPersonFill className="profile-icon" />
              ) : (
                "Login"
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
