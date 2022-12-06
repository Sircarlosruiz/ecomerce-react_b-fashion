import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button } from "primereact/button";
import "./AddProduct.scss";

const AddProduct = ({ products, hideModal }) => {
  const { addToCart } = useContext(AppContext);
  // const {}

  const handleClick = (item) => {
    addToCart(item);
  };
  // debugger;
  const photoStyle = {
    width: "13rem",
    height: "auto",
    borderRadius: "50%",
  };
  console.table(products);
  return (
    <div id="form-add-product" className="form-add-product">
      <form className="form-product">
        <div className="logo-div">
          <img src={products.image} alt="Logo" style={photoStyle} />
        </div>
        <div className="form-group">
          <span className="name-product">{products.name}</span>
          <span className="description-product">
            hola{products.description}
          </span>
          <span className="price-product">precio{products.price}</span>
          <span className="description-product">Cantidad{products.cant}</span>
        </div>
      </form>
      <div className="form-button-group">
        <Button label="Borrar" className="p-button-danger" />
        <Button
          icon="pi pi-shopping-cart"
          label="Agregar al carrito"
          onClick={() => handleClick(products)}
        ></Button>
      </div>
    </div>
  );
};

export default AddProduct;
