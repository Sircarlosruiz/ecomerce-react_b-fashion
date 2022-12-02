import React from 'react'
import ListProduct from '../../containers/ListProduct/ListProduct';
import ProductList from '../../containers/ProductList/ProductList'
import './Home.scss'

const Home = () => {
    return (
      <aside>
        <div className="list-product">
          <ListProduct />
        </div>
        <div className="product-list">
          <ProductList />
        </div>
      </aside>
    );
}

export default Home;