import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className=' gx-5 card col-sm-12 col-md-6 col-lg-4 ' style={{ width: '18rem' }}>
            <img className='card-img-top' src={img} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{name}</h5>
                <p className="card-text">Some Description</p>
                <a href="#" className='btn btn-primary'>Go somewhere</a>
            </div>

        </div>
    );
};

export default Expert;