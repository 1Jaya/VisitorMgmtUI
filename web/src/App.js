import React, {Component} from 'react';
import './App.css';
import Home from './mainWindow/Home';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ApprovedVisitor from './components/ApprovedVisitor';
import FreshVisitor from './components/FreshVisitor';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/approvedVisitor" component={ApprovedVisitor}/>
                    <Route exact path="/freshVisitor" component={FreshVisitor}/>
                </div>
            </Router>
        );
    }
}

export default App;
