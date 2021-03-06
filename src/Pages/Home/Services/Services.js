import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "../Services/Services.css"



const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://glacial-dawn-22102.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className="heading-title mt-5" id='services'>Our Service</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;