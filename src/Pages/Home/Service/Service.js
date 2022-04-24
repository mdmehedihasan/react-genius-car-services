import React from 'react';
import "../Service/Service.css"

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>name:{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;