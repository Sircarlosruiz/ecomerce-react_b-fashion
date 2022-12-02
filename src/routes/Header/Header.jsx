import React, {useContext, useState}from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'
import AppContext from '../../context/AppContext';
import {BiCart, BiCircle} from "react-icons/bi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {state} = useContext(AppContext)


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
            <div className="icons" onClick={setToggle(!toggle)}>
              <BiCart className="icon-cart" />
              <BiCircle className='circle-cart'/>
            </div>
            <div className='number-icon'>
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </div>
          </li>
        </ul>
      </div>
      {toggle && <MyOrder/>}
    </nav>
  );
}

export default Header;