import React, { useContext, useRef, useState, useCallback } from "react";
import { CartContext } from "../../context/cart.context";
import { Button } from "primereact/button";
import { Link, Outlet } from "react-router-dom";
import { useOnClickOutside } from "../../components/Utils/helpers";
import ModalContainer from "../../containers/ModalContainer/modal-container.component";
import FormClient from "../../components/Form-Client/FormClient";
import ItemCard from "./item-card";

import "./MyOrderList.scss";
import "../../styles/ButtonDemo.CSS";
import { ClientContext } from "../../context/client.context";

const MyOrderList = () => {
  const { cartProducts } = useContext(CartContext);
  const { Client, addUser } = useContext(ClientContext);

  const [showCardDropDownModal, setShowCardDropDownModal] = useState(false);

  const CardDropDownModalRef = useRef();

  const hideCardDropDown = useCallback(({ target }) => {
    if (target.closest(".link")) return;
    setShowCardDropDownModal(false);
  }, []);

  useOnClickOutside(CardDropDownModalRef, hideCardDropDown);

  // const handlerClick = () => {};
  return (
    <>
      <h1 className="tittle-order">Revise su orden (✿◠‿◠)</h1>
      <div className="orderlist">
        {cartProducts.map((product, cant, idx) => (
          <ItemCard product={product} cant={cant} key={idx} />
        ))}
        <div className="buttons-list-user">
          <Button
            onClick={() => {
              setShowCardDropDownModal(!showCardDropDownModal);
            }}
            label="Usuario"
            className="p-button-raised p-button-info"
          />
        </div>
        <div className="buttons-list">
          <Link to={"/"}>
            <Button
              label="Volver"
              className="p-button-raised p-button-danger"
            />
          </Link>
          <Link to={"/checkout"}>
          <Button label="Enviar" className="p-button-raised button-enviar" />
          </Link>
        </div>
      </div>
      <ModalContainer
        show={showCardDropDownModal}
        modalRef={CardDropDownModalRef}
        component={<FormClient Client={Client}/>}
        className={"modal-container cardDropDown"}
      />
      <Outlet />
    </>
  );
};
export default MyOrderList;
