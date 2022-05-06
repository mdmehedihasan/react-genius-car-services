import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    return (
        <div>
            <h3>Welcome to details:{service.name}</h3>
            <div>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetail;