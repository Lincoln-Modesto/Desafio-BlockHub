import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login"component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    )
}