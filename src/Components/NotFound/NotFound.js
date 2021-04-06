import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Are You lost, my friend?</h1>
            <p>No Problem! we got you</p>
            <Link to='/'>Return to home</Link>
        </div>
    );
};

export default NotFound;