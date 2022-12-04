import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button } from "primereact/button";
import ItemProduct from "./Item-Product";
import "./AddProduct.scss";

const AddProduct = ({ products, hideModal }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  // debugger;
  console.log(products);
  return (
    <div id="form-add-product" className="form-add-product">
      {products
        .map((item, idx) => <ItemProduct key={idx} products={item} />)}
      <div className="form-button-group">
        <Button label="Borrar" className="p-button-danger" />
        <Button
          icon="pi pi-shopping-cart"
          label="Agregar al carrito"
          onClick={() => {
            handleClick(products);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default AddProduct;
