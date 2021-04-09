import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { closeCheckoutModal } from '../../../Redux/Actions/modalActions';
import { GetCheckOutModalState } from '../../../Redux/Helpers/Helpers';
import './Checkout.css'
const Checkout = () => {
    const showCheckout = GetCheckOutModalState()
    const history = useHistory()
    const dispatch = useDispatch()
    const handleCheckoutModal = () => {
        dispatch(closeCheckoutModal())
        setTimeout(()=>{
            history.push('/')
        },800)
    }
    return (
       <div>
       {showCheckout?<div onClick={handleCheckoutModal} className="back-drop-checkout" ></div>:null}
       <div style={{
        opacity:showCheckout?'1':0,zIndex:showCheckout?'100':'-1',
        transform:showCheckout?'translate(0vh)':'translate(100vh)'
    }} 
    className="checkout-modal" >
        <h5>Your Order Has been placed!</h5>
        <button onClick={handleCheckoutModal} className="close-button" > X </button>
    </div>
       </div>
    );
};

export default Checkout;