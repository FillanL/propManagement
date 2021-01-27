import React from 'react'
import { Route, Switch } from 'react-router-dom';
import SignIn from '../AuthComponents/SignIn';
import SignUp from '../AuthComponents/SignUp';
import Home from '../../Home';

function Routing() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
        </Switch>
    )
}

export default Routing
