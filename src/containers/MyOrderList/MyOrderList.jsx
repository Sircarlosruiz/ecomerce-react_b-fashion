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
    <div className="usuario-card">
      <div className="input-user-name">
        <div className="p-fluid formgrid grid">
          <div className="field col-12 md:col-4">
            <label htmlFor="basic">Nombre</label>
            <InputMask id="basic" mask="Tu nombre aquí" value={cartProducts} placeholder="Tu nombe aquí" onChange={(e) => setInputName(e.value)}></InputMask>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MyOrderList;
