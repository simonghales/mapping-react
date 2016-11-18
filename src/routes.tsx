import * as React from 'react';
import * as ReactRouter from 'react-router';

const { Route, IndexRoute } = ReactRouter;

import App from './containers/App/App';
import Home from './containers/Home/Home';

export default () => {
    return (
        <Route path="/" component={App}>
            { /* Home (main) route */ }
            <IndexRoute component={Home}/>
        </Route>
    );
}