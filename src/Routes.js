import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import CounterComponent from './Components/CounterComponent';
import NewRoute from './Components/NewRoute';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/another_route" component={NewRoute} />
            <Route path="/" component={CounterComponent} />
        </Switch>
    </Router>
);

export default Routes;