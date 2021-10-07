import React from 'react';
import ShowName from '../ShowName/ShowName';
import './Cart.css'

const Cart = (props) => {
    // total hire amount and singer name
    const { cart } = props;
    let total = 0;
    let SingerName = [];
    for (const singer of cart) {
        total = total + singer.hireAmount;
        SingerName.push(singer);
    }
    
    //show data in cart
    return (
        <div className='bg-light me-3 shadow rounded'>
            <h1>My Cart</h1>
            <h5 className='text-start ms-3'><b>Added Artist:</b> {cart.length}</h5>
            <h5 className='text-start ms-3 mb-4'><b>Total Hire Amount:</b> {total} tk</h5>
            {
                SingerName.map(names => <ShowName key={names.id} names={names}></ShowName>)
            }
            <button className='btn btn-primary me-2 mb-3'>Hire Now</button>
            <button className='btn btn-secondary mb-3'>Free For Charity</button>
        </div>
    );
};

export default Cart;