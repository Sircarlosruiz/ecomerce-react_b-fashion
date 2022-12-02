import React from 'react'
// import ListProduct from '../../containers/ListProduct/ListProduct'
import ProductList from '../../containers/ProductList/ProductList'
import './Home.scss'

const Home = () => {
    return (
      <div className='home'>
        <ProductList/>
      </div>
    );
}

export default Home;