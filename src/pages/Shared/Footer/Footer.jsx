import React from 'react';


const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        padding: '20px',
      };
    return (
        <div style={footerStyle} className="container-fluid">
            
            <p>All rights reserved @Peshwari Bites</p>
            
        </div>
    );
};

export default Footer;