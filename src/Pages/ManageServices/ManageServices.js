import React from 'react';
import UseServices from '../../Hooks/UseService';

const ManageServices = () => {
    const [services, setServices] = UseServices();


    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://glacial-dawn-22102.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
    }

    return (
        <div>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}  <button onClick={() => handleDelete(service._id)}>X</button>  </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;