import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";import "./MyOrderList.scss";
import ItemCard from "./item-card";

const MyOrderList = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <div className="orderlist">
        {cartProducts.map((product, cant, idx) => (
          <ItemCard product={product} cant={cant} key={idx} />
        ))}
      </div>
    </>
  );
}
export default MyOrderList;
