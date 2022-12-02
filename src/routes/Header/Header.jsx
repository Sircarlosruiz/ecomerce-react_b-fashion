import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'
import {BiCart} from "react-icons/bi";

const Header = () => {
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
          <li>
            <img src={<BiCart/>} alt="shopping cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;