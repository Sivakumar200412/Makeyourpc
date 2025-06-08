import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assests } from "../assets/assests";
import { useCart } from "../context/CartContext";
import '../styles/navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (location.pathname === "/") setMenu("Home");
    else if (location.pathname === "/build") setMenu("Build");
    else if (location.pathname === "/contact") setMenu("Contact");
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assests.undes} alt="Logo" />
      </Link>
      <ul className="navbarmenu">
        <li
          onClick={() => setMenu('Home')}
          className={menu === 'Home' ? 'active' : ''}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
        </li>
        <li
          onClick={() => setMenu('Build')}
          className={menu === 'Build' ? 'active' : ''}
        >
          <Link to="/build" style={{ color: "inherit", textDecoration: "none" }}>Build</Link>
        </li>
        <li
          onClick={() => setMenu('Contact')}
          className={menu === 'Contact' ? 'active' : ''}
        >
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
      <div className="navbarright">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <div className="navbarbasket">
          <Link to="/cart">
            <img className="cart" src={assests.cart} alt="Cart" />
            {cartCount > 0 && <div className="dot">{cartCount}</div>}
          </Link>
        </div>
        <Link to="/signin">
          <button className="but">SIGN-IN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
