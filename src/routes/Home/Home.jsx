import React from 'react'
import { ListProduct } from '../../containers/ListProduct/ListProduct';
import ProductList from '../../containers/ProductList/ProductList';
import './Home.scss'

const Home = () => {
    return (
      <aside>
        <div className="listProduct">
          <ListProduct />
        </div>
        <div className="productList">
          <ProductList />
        </div>
      </aside>
    );
}

export default Home;