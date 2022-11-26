import React from 'react'
import { ListProduct } from '../../containers/ListProduct/ListProduct';
import ProductList from '../../containers/ProductList/ProductList';
import './Home.scss'

const Home = () => {
    return (
      <aside>
        <ListProduct />
        <ProductList />
      </aside>
    );
}

export default Home;