import React from 'react';
import nothing from "../../images/notFound.jpg"

const NotFound = () => {
    return (
        <div>
            <h3>Not Found</h3>
            <img src={nothing} alt="" />
        </div>
    );
};

export default NotFound;