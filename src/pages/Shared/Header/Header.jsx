import React from 'react';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p>Journalism Without Fear</p>
            <p className=''>DATE</p>
        </div>
    );
};

export default Header;