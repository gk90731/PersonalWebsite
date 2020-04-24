import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Protfolio from '../container/protfolio/index.js';
import NavBar from '../components/navbar'
export default class Routes extends Component {
    render() {
        
    return (
        <div>
            <Router>
                <Switch>
                    {/* Looking for userToken */}
                    {/* If userToken is available in local storage than render the required component */}
                    <Route exact path="/" component={Protfolio}></Route>
                    <Route exact path="/exp" component={NavBar}></Route>
                </Switch>
            </Router>
        </div>
    )
}
}
