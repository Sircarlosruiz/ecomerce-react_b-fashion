import React from 'react';

const ItemProduct = ({products, idx}) => {

    const photoStyle = {
        width: "3.5rem",
        height: "auto",
        borderRadius: "50%",
      };
  return (
    <form>
      <image src={products.image} style={photoStyle}/>
      <span className="name-product">{products.name}</span>
      <span className='description-product'>{products.price}</span>
    </form>
  );
}

export default ItemProduct;