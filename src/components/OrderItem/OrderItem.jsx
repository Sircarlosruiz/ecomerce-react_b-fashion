import React from 'react';
// import AiFillCloseCircle from 'react-icons/ai';
import './OrderItem.scss';

const OrderItem = ({product}) => {
    return (
        <div className="OrderItem">
			<figure>
				<img src={product.image} alt="bike" />
			</figure>
			<p>{product.name}</p>
			<p>{product.price}</p>
			{/* <AiFillCloseCircle/> */}
		</div>
    );
}

export default OrderItem;