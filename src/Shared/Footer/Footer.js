import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className='mt-5'>
                <p className='fs-5'><small>Copyright all {new Date().getFullYear()}</small></p> {/* Outputs 2020 */}
            </footer>
        </div>
    );
};

export default Footer;