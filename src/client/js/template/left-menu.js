import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class LeftMenu extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="left-menu collapsed">
                <Link to="/">Home</Link><br />
                <Link to="/calendar">Calendar</Link><br />
                <Link to="/dashboard">Dashboard</Link><br />
            </div>
        );
    }
}

export default LeftMenu;