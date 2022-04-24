import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p><small> &copy Copyright all {new Date().getFullYear()}</small></p> {/* Outputs 2020 */}
            </footer>
        </div>
    );
};

export default Footer;