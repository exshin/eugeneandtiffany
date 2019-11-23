import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import LandingPageWedding from './components/landingPageWedding';
import LandingPageSanta from './components/landingPageSanta';

const App = (props) => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPageWedding} />
                <Route exact path="/santa" component={LandingPageSanta} />
            </Switch>
        </div>
    </Router>
);
export default App;
