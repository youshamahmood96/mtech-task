import React from 'react';

import { GetModalState } from '../../Redux/Helpers/Helpers';
import Cart from './Cart/Cart';
import GridLayout from './GridLayout/GridLayout';
import NavBar from './NavigationBar/NavBar';
import './Hero.css'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/modalActions';

const Hero = () => {
    const show = GetModalState()
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
        <Cart show={show} />
        </React.Fragment>
    );
};

export default Hero;