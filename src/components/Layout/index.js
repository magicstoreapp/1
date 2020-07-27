import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppRoute from './AppRoute';
import MainLayout from './MainLayout';
import AltLayout from './AltLayout';
import Foo from './Foo';
import Bar from './Bar';


function Layout() {
    return (
        <Router>
            
            <Switch>
            
                <AppRoute exact path="/foo" layout={MainLayout} component={Foo} />
                <AppRoute exact path="/bar" layout={AltLayout} component={Bar} />
            </Switch>
        </Router>
    )
}

export default Layout
