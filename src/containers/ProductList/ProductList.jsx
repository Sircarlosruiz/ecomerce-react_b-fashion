
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../service/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import useGetProducts from '../../hooks/useGetProducts'
import './ProductList.scss';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const API = 'http://localhost:8181/api/product'
    const productList = useGetProducts(API);
    // console.log(`hola ${productList[0]}`);
    const productService = new ProductService();

    // console.log(productService.getProductsSmall());

    useEffect(() => {
        productService.getAll().then(data => setProducts(data));
        // setProducts(productList);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        let ruta = `../../assets/${rowData.image}`;
        console.log(ruta);
        return <img src={`../../assets/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const header = (
        <div className="table-header">
            Productos
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    console.log(products);
    return (
        <div className="datatable-templating-demo">
            <div className="card">
                <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                </DataTable>
            </div>
        </div>
    );
}
                 
export default ProductList;