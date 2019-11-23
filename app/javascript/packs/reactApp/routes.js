import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import LandingPageWedding from './components/landingPageWedding';

const App = (props) => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPageWedding} />
            </Switch>
        </div>
    </Router>
);
export default App;
