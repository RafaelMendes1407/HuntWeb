import React from 'react'

import {BrowserRouter, Swith, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Products from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Products}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;