import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./OrderCard.scss";

const OrderCard = ({
  cartProducts,
  isCartOpen,
  addCartProducts,
  resetCartProduct,
}) => {
  // console.log(cartProducts[0]);

  const sumTotal = () => {
    let total = 0;
    cartProducts.map((product) => {
      total += product[0].price;
    });
    return total;
  };

  const handlerClick = (item) => {
    addCartProducts(item, item.cantidad);
    resetCartProduct();
  };

  return (
    <div className="my-order">
      <div id="title-container">
        <p id="title">Mi orden</p>
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
          <button
            onClick={() => handlerClick(cartProducts)}
            className="primary-button"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
