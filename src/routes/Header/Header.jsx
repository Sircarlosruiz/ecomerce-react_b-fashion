import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import AppContext from "../../context/AppContext";
import ShoppingCart from "../../assets/icons/shopping-cart.png";

import { Outlet } from "react-router-dom";
import MyOrder from "../../containers/MyOrder/MyOrder";
import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav-bar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Categorias</a>
          </li>
          <li>
            <a href="/">Ordenes</a>
          </li>
          <li>
            <a href="/">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/">Contáctanos</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>ceruiz@uamv.edu.ni</li>
          <li className="navbar-shopping-cart" onClick={handleToggle}>
            <img
              src={ShoppingCart}
              alt="Shopping Cart"
              onClick={() => setToggleOrders(!toggleOrders)}
              className="shopping-cart-icon"
            />
            <span className="count-cart">
              {state.cart.lenght > 0 && <div>{state.cart.lenght}</div>}
            </span>
          </li>
        </ul>
      </div>
      {toggle && <MyOrder />}
      <Outlet />
    </nav>
  );
};

export default Header;
