import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Checkout from '../Components/Hero/Cart/Checkout';

import Hero from '../Components/Hero/Hero';
import NotFound from '../Components/NotFound/NotFound';

const RoutesHandler = () => {
    return (
        <Router>
        <Switch>
        <Route exact path = '/' component={Hero} />
        <Route exact path ='/checkout' component={Checkout} />
        <Route path='*' component={NotFound} />
        </Switch>
        </Router>
    );
};

export default RoutesHandler;