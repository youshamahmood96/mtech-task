import React from 'react';

import { GetCheckOutModalState, GetModalState } from '../../Redux/Helpers/Helpers';
import Cart from './Cart/Cart';
import GridLayout from './GridLayout/GridLayout';
import NavBar from './NavigationBar/NavBar';
import './Hero.css'
import { useDispatch } from 'react-redux';
import { toggleCheckoutModal, toggleModal } from '../../Redux/Actions/modalActions';
import Checkout from './Cart/Checkout';

const Hero = () => {
    const show = GetModalState()
    const showCheckout = GetCheckOutModalState()
    const dispatch = useDispatch()
    const handleModalToggle = () => {
       dispatch(toggleModal())
    }
    const handleCheckoutModal = () => {
        dispatch(toggleCheckoutModal())
    }
    return (
        <React.Fragment>
        <Checkout showCheckout={showCheckout} />
        {
            showCheckout?<div onClick={handleCheckoutModal} className="back-drop"></div>:null
        }
        {
            show?<div onClick={handleModalToggle} className="back-drop"></div>:null
        }
        <NavBar/>
        <GridLayout/>
        <Cart show={show} />
        </React.Fragment>
    );
};

export default Hero;