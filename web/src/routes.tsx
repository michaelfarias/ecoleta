import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint'

const Routes = () => {

    return (
        // exact{true} é mesma coisa que so exact
        <BrowserRouter>
            <Route component={Home} path="/" exact={true} />
            <Route component={CreatePoint} path="/create-point" exact />
        </BrowserRouter>
    )
}

export default Routes;