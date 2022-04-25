import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>Welcome to details:{serviceId}</h3>
            <div>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetail;