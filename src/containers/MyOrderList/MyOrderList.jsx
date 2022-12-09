import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";
import "./MyOrderList.scss";
import ItemCard from "./item-card";

const MyOrderList = () => {
  const { cartProducts } = useContext(CartContext);
  const [orderList, setOrderList] = useState([]);
  const newOrderList = cartProducts.map((x) => {
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    return { product: x.product, cant: x.cant };
  });
  // useEffect(() => {
  //   const filterOrderList = newOrderList.map((x) => {
  //     console.log('====================================');
  //     console.log(x);
  //     console.log('====================================');
  //     return { product: x.product, cant: x.cant };
  //   });
  //   setOrderList(filterOrderList);
  // }, [cartProducts]);

  return (
    <>
      <div className="orderlist">
        {orderList.map((product, cant, idx) => (
          <ItemCard product={product} cant={cant} key={idx} />
        ))}
      </div>
    </>
  );
}
export default MyOrderList;
