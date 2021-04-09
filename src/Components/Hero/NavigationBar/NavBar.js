import React from 'react';

import './Navbar.css'
import companyLogo from '../../../Resources/companyLogo.png'
import {FaShoppingCart} from 'react-icons/fa'
import { GetTotalLength } from '../../../Redux/Helpers/Helpers';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../Redux/Actions/modalActions';
const NavBar = () => {
    console.log('navbar render');
    const length = GetTotalLength()
    const dispatch = useDispatch()
    const handleModalToggle = () => {
       dispatch(toggleModal())
    }
    return (
        <nav className="navbar">
        <img src={companyLogo} alt=""/>
        <ul>
        <li> <FaShoppingCart className="cart-icon" onClick={handleModalToggle} /> {length} </li>
        </ul>
        </nav>
    );
};

export default React.memo(NavBar);