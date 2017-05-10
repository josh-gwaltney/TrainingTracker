import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Template from './template';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Dashboard from './pages/dashboard';

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route component={ Template }>
            <Route path="/" component={ Home } />
            <Route path="/calendar" component={ Calendar } />
            <Route path="/dashboard" component={ Dashboard } />
        </Route>
    </Router>
), document.getElementById('root'));

console.log('success');