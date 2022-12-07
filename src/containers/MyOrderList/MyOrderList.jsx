
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { OrderService } from '../../service/OrderService';
import './MyOrderList';

const MyOrderList = () => {
    const [order, setOrder] = useState([]);
    const orderService = new OrderService();

    useEffect(() => {
        orderService.getAll().then(data => setOrder(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`/assets/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    {/* <span className="product-category">{item.category}</span> */}
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.price}</h6>
                    {/* <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span> */}
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <OrderList value={order} header="List of Orders" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate} onChange={(e) => setOrder(e.value)}></OrderList>
            </div>
        </div>
    );
}

export default MyOrderList;