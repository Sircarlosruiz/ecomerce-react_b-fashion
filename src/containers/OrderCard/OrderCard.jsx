import React from "react";
import OrderItem from "../../components/OrderItem/OrderItem";

import "./OrderCard.scss";
// import AiOutlineArrowLeft from 'react-icons/ai'

const OrderCard = ({cartProducts}) => {
  // console.table(cartProducts[0][0]);
  return (
    <div id="my-order">
      <div className="title-container">
        {/* <img src={<AiOutlineArrowLeft/>} alt="arrow" /> */}
        <p className="title">Mi orden</p>
      </div>
      <div className="my-order-content">
        {Object.entries(
          cartProducts.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))
        )}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </div>
  );
};

export default OrderCard;
