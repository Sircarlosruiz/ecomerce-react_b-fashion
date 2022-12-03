import React from 'react'
import ProductList from '../../containers/ProductList/ProductList'
import './Home.scss'

const Home = () => {
    return (
      <div className="home">
        <ProductList />
      </div>
    );
}

export default Home;