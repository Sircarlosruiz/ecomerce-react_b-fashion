import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "../../components/OrderItem/OrderItem";

import "./OrderCard.scss";
// import AiOutlineArrowLeft from 'react-icons/ai'

const OrderCard = ({ cartProducts, isCartOpen }) => {
  // console.log(cartProducts[0]);

  const sumTotal = () => {
    let total = 0;
    cartProducts.map((product) => {
      total += product[0].price;
    });
    return total;
  };

  // console.log(isCartOpen);

  return (
    <div className="my-order">
      <div id="title-container">
        {/* <img src={<AiOutlineArrowLeft/>} alt="arrow" /> */}
        <p className="title">Mi orden</p>
      </div>
      <div className="my-order-content">
        {cartProducts.map((product, index) => (
          <OrderItem product={product} indexValues={index} key={index} />
        ))}
        <div id="order">
          <p>
            <span>Total</span>
          </p>
          <p>{isCartOpen ? sumTotal() : 0}</p>
        </div>
        <Link to={`/MyOrderList`}>
          <button className="primary-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
