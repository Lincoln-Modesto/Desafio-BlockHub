import React, {useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import {Context} from '../context/AuthContext';
import Loader from '../components/Loader';

function CustomRoute({isPrivate, ...rest}){

    const { authenticated, loading } = useContext(Context);

    if(loading){
        return <Loader isLoading={loading}/>
    }
    
    if(isPrivate && !authenticated){
        return <Redirect to="/login"/>
    }

    return <Route {...rest}/>
}

export default function Routes(){
    return(
        <Switch>
            <CustomRoute isPrivate exact path="/" component={Home}/>
            <CustomRoute path="/login"component={Login}/>
            <CustomRoute path="/register" component={Register}/>
        </Switch>
    )
}