import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import Form from './form';
import House from './House';

export const Router = props => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Dashboard state={props.state} />} />
            <Route exact path='/find-my-class' render={() => <Form togglePoint={props.togglePoint} setHouse={props.setHouse} />} />
            <Route exact path={`/find-my-class/${window.localStorage.name}`} render={() => <House />} />
             <Route path=''/>
        </Switch>
    )
}

