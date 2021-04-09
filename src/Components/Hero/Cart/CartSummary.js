import React from 'react';

import './CartSummary.css'
import { TotalCalculator } from '../../../Redux/Helpers/Helpers';
import { useDispatch } from 'react-redux';
import { toggleCheckoutModal, toggleModal } from '../../../Redux/Actions/modalActions';
import { Link } from 'react-router-dom';
import { clearCart } from '../../../Redux/Actions/cartActions';

const CartSummary = () => {
    let subTotal = TotalCalculator()
    const dispatch = useDispatch()
    const handleCheckoutModal = () => {
        dispatch(toggleCheckoutModal())
        dispatch(clearCart())
        dispatch(toggleModal())
    }
    return (
        <div className="cart-summary" >
        <hr/> 
        <p style={{textAlign:'right'}}>Sub-Total = {subTotal}</p>
        <p style={{textAlign:'right'}}>Delivery-Charge = 20</p>
        <hr/>
        <p style={{textAlign:'right'}}>Grand-Total = {subTotal+20}</p>
        <Link to='/checkout'><button onClick={handleCheckoutModal} >Proceed to checkout</button> </Link>
        </div>
    );
};

export default CartSummary;