import React from 'react';
import './ShowName.css';

const ShowName = (props) => {
    // show names to the cart
    const { name,img } = props.names;
    return (
        <div>
            <div className='show-name'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default ShowName;