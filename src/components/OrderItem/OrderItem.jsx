import React from 'react';
// import AiFillCloseCircle from 'react-icons/ai';
import './OrderItem.scss';

const OrderItem = ({product}) => {
	const {name, price, image} = product[0];
	const cantidad = product[1];
	console.log(name);
	console.table(product);
    return (
        <div className="OrderItem">
			<figure>
				<img src={image} alt="imagen" />
			</figure>
			<p>{name}</p>
			<p>{price}</p>
			{/* <AiFillCloseCircle/> */}
		</div>
    );
}

export default OrderItem;