import React from 'react';
import LoginPage from './Login';
import RegisterUser from './RegisterUser';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App(){

    return(
        <div id="container">
            <Router>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterUser} />
                <Route path="/dashboard"  component={Dashboard} />
            </Router>
        </div>
    );
}

export default App;