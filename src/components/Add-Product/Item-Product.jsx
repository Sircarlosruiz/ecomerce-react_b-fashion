import React from "react";
import logo from "../../assets/logo.png";

const ItemProduct = ({product, idx }) => {

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
        <span className="name-product">{product.name}</span>
        <span className="description-product">hola{product.description}</span>
        <span className="price-product">precio{product.price}</span>
        <span className="description-product">Cantidad{product.cant}</span>
      </div>
    </form>
  );
};

export default ItemProduct;
