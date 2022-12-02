import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import { Button } from "primereact/button";
import './AddProduct.scss'
import ItemProduct from './Item-Product';

const AddProduct = ({products, hideModal}) => {
    const {addToCart} = useContext(AppContext);

    const handleClick = item =>{
        addToCart(item);
    };
    console.table(products);
    return (
      <div className="form-add-product">
        {Object.entries(products).map((item, idx) => (
          <ItemProduct key={idx} products={item} />
        ))}
        <Button
          icon="pi pi-shopping-cart"
          label="Add to Cart"
          onClick={() => handleClick(products)}
        ></Button>
      </div>
    );
}

export default AddProduct;