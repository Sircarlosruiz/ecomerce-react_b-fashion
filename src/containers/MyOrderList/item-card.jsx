import React from 'react'
import './MyOrderList.scss'

const ItemCard = ({product, cant}) => {
    const {name, description, price, imagen} = product[0];

    return (
        <div className='product-card'>
        <img src={`/assets/${imagen}`} alt={name}/>
        <div className='info-product'>
            <span className='product-name'>{name}</span>
            <span className='product-description'>{description}</span>
            <span className='product-price'>{price}</span>
            <button className='delete-button'>Borrar</button>
        </div>
        </div>
    );
}

export default ItemCard;