import React from 'react';
import './Header.css';

const Header = () => {
    // show header part
    return (
        <div className='bg-secondary text-white pt-2 pb-2 mb-4'>
            <h2>Make an Cherity Concert</h2>
            <p>Here you choose your singer for concert (free or Hired)</p>
            <h2>Total Budget: 100000 tk</h2>
        </div>
    );
};

export default Header;