import React from 'react'

import './MyOrder.scss'
// import AiOutlineArrowLeft from 'react-icons/ai'

const MyOrder = () => {
    // const { state } = useContext(AppContext);
    return (
      <div className="my-order">
        <div className="title-container">
          {/* <img src={<AiOutlineArrowLeft/>} alt="arrow" /> */}
          <p className="title">Mi orden</p>
        </div>
        <div className="my-order-content">
          {/* {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))} */}
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
}

export default MyOrder;