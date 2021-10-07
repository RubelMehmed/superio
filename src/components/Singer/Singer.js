import React from 'react';
import './Singer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singer = (props) => {
    const { name, img, hireAmount, gender, PopularSong, age } = props.singers;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='singer-container'>
                <div className='col'>
                    <div className='card h-100 shadow'>
                        <div className='align-items-center'>
                            <img className='singer-img' src={img} alt="" />
                        </div>
                        <div className='card-body text-left'>
                            <h4 className='text-center'> {name}</h4>
                            <p className='text-start'><b>Age:</b> {age}</p>
                            <p className='text-start'><b>Gender:</b> {gender}</p>
                            <p className='text-start'><b>Popular Song:</b> {PopularSong}</p>
                            <h4 className='text-start mb-4'><b>Hire Amount:</b> {hireAmount} tk</h4>
                        <button onClick={() => props.handleAddToCart(props.singers)} className='btn btn-primary w-100'>{cartIcon} Add To Cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Singer;