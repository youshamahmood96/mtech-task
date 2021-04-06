import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckoutModal } from '../../../Redux/Actions/modalActions';
import './Checkout.css'
const Checkout = ({showCheckout}) => {
    const dispatch = useDispatch()
    const handleCheckoutModal = () => {
        dispatch(toggleCheckoutModal())
    }
    return (
        <div style={{
            opacity:showCheckout?'1':0,zIndex:showCheckout?'100':'-1',
            transform:showCheckout?'translate(0vh)':'translate(100vh)'
        }} 
        className="checkout-modal" >
            <h5>Your Order Has been placed!</h5>
            <button onClick={handleCheckoutModal} className="close-button" > X </button>
        </div>
    );
};

export default Checkout;