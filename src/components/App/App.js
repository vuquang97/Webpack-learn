import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from '../Header';

function App(props) {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/">
                        <Header />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;