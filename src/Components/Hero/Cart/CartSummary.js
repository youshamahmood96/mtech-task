import React from 'react';

import './CartSummary.css'
import { TotalCalculator } from '../../../Redux/Helpers/Helpers';

const CartSummary = () => {
    let subTotal = TotalCalculator()
    return (
        <div className="cart-summary" >
        <hr/> 
        <p style={{textAlign:'right'}}>Sub-Total = {subTotal}</p>
        <p style={{textAlign:'right'}}>Delivery-Charge = 20</p>
        <hr/>
        <p style={{textAlign:'right'}}>Grand-Total = {subTotal+20}</p>
        </div>
    );
};

export default CartSummary;