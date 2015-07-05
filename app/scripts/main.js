import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import Map from './components/Map';
import Home from './components/Home';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';
import TrackingService from './services/TrackingService';

var routes = (
    <Route handler={AuthenticatedApp}>
        <Route name="login" handler={Login}/>
        <Route name="home" path="/" handler={Map}/>
    </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
    React.render(<Handler />, document.getElementById('react-mount'));
});

TrackingService.start();