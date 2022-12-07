import React, {  useState, useCallback, useRef, useContext } from "react";
import Logo from "../../assets/logo.png";
import ShoppingCart from "../../assets/icons/shopping-cart.png";

import { Outlet } from "react-router-dom";
import OrderCard from "../../containers/OrderCard/OrderCard";
import "./Header.scss";
import ModalContainer from "../../containers/ModalContainer/modal-container.component";
import { useOnClickOutside } from "../../components/Utils/helpers";
import { CartContext } from "../../context/cart.context";

const Header = () => {
  const {cartProducts} = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const [showCardDropDownModal, setShowCardDropDownModal] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const CardDropDownModalRef = useRef();

  const hideCardDropDown = useCallback(({ target }) => {
    if (target.closest(".link")) return;
    setShowCardDropDownModal(false);
  }, []);

  useOnClickOutside(CardDropDownModalRef, hideCardDropDown);

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
              onClick={() => {
                setShowCardDropDownModal(!showCardDropDownModal);
              }}
              className="shopping-cart-icon"
            />
          </li>
          <li className="count-cart">
            {cartProducts.length > 0 ? <div>{cartProducts.length}</div> : null}
          </li>
        </ul>
      </div>

      <ModalContainer
        show={showCardDropDownModal}
        modalRef={CardDropDownModalRef}
        component={<OrderCard cartProducts={cartProducts}/>}
        className={"modal-container cardDropDown"}
      />
      <Outlet />
    </nav>
  );
};

export default Header;
