import React from 'react'
import { Button } from 'primereact/button';

import './MyOrderList.scss';
import '../../styles/ButtonDemo.CSS';


const ItemCard = ({product, cant}) => {
    const {name, description, price, imagen} = product[0];

    return (
        <div className='product-card'>
        <img src={`/assets/${imagen}`} alt={name}/>
        <div className='info-product'>
            <span className='product-name'>{name}</span>
            <span className='product-description'>{description}</span>
            <span className='product-price'>{price}</span>
            <Button label="Borrar" className="p-button-raised p-button-danger p-button-text" />

        </div>
        </div>
    );
}

export default ItemCard;