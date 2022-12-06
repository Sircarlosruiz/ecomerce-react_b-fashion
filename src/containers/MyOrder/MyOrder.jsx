import React , {useContext} from 'react'
import AppContext from '../../context/AppContext'
import OrderItem from '../../components/OrderItem/OrderItem'

import './MyOrder.scss'
// import AiOutlineArrowLeft from 'react-icons/ai'

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
    return (
      <div className="my-order">
        <div className="title-container">
          {/* <img src={<AiOutlineArrowLeft/>} alt="arrow" /> */}
          <p className="title">Mi orden</p>
        </div>
        <div className="my-order-content">
          {cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
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