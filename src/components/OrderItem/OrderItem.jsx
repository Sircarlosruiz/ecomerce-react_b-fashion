import React from "react";
// import AiFillCloseCircle from 'react-icons/ai';
import "./OrderItem.scss";

const OrderItem = ({ product }) => {
  const { name, price, image } = product[0];
  
  return (
    <div id="order-item">
      <figure>
        <img src={`/assets/${image}`} alt="imagen" />
      </figure>
      <p>{name}</p>
      <p>{price}</p>
      {/* <AiFillCloseCircle/> */}
    </div>
  );
};

export default OrderItem;
