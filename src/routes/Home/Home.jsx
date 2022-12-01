import React from 'react'
import ProductList from '../../containers/ProductList/ProductList'
import './Home.scss'

const Home = () => {
    return (
      <aside>
        <div className="productList">
          <ProductList />
        </div>
      </aside>
    );
}

export default Home;