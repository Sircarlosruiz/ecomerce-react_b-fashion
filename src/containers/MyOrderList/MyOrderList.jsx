import React, { useContext, useEffect, useState } from "react";
import { OrderList } from "primereact/orderlist";
import { CartContext } from "../../context/cart.context";
import "./MyOrderList.scss";
import ItemCard from "./item-card";

const MyOrderList = () => {
  const { cartProducts } = useContext(CartContext);


  return (
    <div className="orderlist">
    {cartProducts.map((idx, item) => {
      <ItemCard key={idx} product={item}/>
    })}
    </div>
  );
};

export default MyOrderList;
