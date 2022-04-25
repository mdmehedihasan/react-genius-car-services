import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'wiliam jon', img: expert1 },
    { id: 1, name: 'jera pi', img: expert2 },
    { id: 1, name: 'hula mi', img: expert3 },
    { id: 1, name: 'jaow ina', img: expert4 },
    { id: 1, name: 'Sifara ar', img: expert5 },
    { id: 1, name: 'Finie ar', img: expert6 },
]


const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary mt-5' id='Experts'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;