import React from 'react'
import errorImg from  '../../assets/404error.jpg'

const NotFound = () => {
    return (
        <div className='error-card'>
        <img src={errorImg}/>
        </div>
    );
}

export default NotFound;