import React from 'react';
import { useDispatch } from 'react-redux';

import {  GetModalState } from '../../Redux/Helpers/Helpers';
import Cart from './Cart/Cart';
import GridLayout from './GridLayout/GridLayout';
import NavBar from './NavigationBar/NavBar';
import './Hero.css'
import {  toggleModal } from '../../Redux/Actions/modalActions';
import { useDelayUnmount } from '../Helpers/helpers';

const Hero = () => {
    const show = GetModalState()
    const showDiv = useDelayUnmount(show,2000)
    console.log(show,showDiv);
    const dispatch = useDispatch()
    const handleModalToggle = () => {
       dispatch(toggleModal())
    }
    return (
        <React.Fragment>
        {
            show?<div onClick={handleModalToggle} className="back-drop"></div>:null
        }
        <NavBar/>
        <GridLayout/>
        {showDiv && <Cart show={show}  />}
        </React.Fragment>
    );
};

export default Hero;