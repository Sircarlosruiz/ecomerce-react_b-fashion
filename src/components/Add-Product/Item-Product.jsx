import React from "react";
import logo from "../../assets/logo.png";

const ItemProduct = ({ products, idx }) => {

  const photoStyle = {
    width: "13rem",
    height: "auto",
    borderRadius: "50%",
  };
  return (
    <form className="form-product">
      <div className="logo-div">
        <img src={logo} alt="Logo" style={photoStyle} />
      </div>
      <div className="form-group">
        <span className="name-product">{products.name}</span>
        <span className="description-product">hola{products.description}</span>
        <span className="price-product">precio{products.price}</span>
        <span className="description-product">Cantidad{products.cant}</span>
      </div>
    </form>
  );
};

export default ItemProduct;
