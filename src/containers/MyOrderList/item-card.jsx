import React from 'react'
import './MyOrderList.scss'

const ItemCard = ({product, cant}) => {
    // console.log('====================================');
    // console.table(product);
    // console.log('====================================');
    console.log('====================================');
    console.log(product);
    console.log('====================================');

    return (
        <div className='product-card'>
        {/* <img src={imagen}/> */}
        <div className='info-product'>
            {/* <span>{nombre}</span> */}
            {/* <p>{nombre}</p> */}
            <span>Precio</span>
            <button>Boton</button>
        </div>
        </div>
    );
}

export default ItemCard;