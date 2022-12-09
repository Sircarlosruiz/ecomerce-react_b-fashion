import React from "react";
import close_icon from "../../assets/icons/icon_close.png";
import "./OrderItem.scss";

const OrderItem = ({ product }) => {
  const { name, price, imagen } = product[0];

  return (
    <div id="order-item">
      <figure>
        <img src={`/assets/${imagen}`} alt="imagen" className="item-img" />
      </figure>
      <p>{name}</p>
      <p>{price}</p>
      <img src={close_icon} alt="close icon" classname="close-icon" />
    </div>
  );
};

export default OrderItem;
