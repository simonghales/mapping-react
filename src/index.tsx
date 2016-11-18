import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as ReactRouter from 'react-router';
// let { Route, IndexRoute } = ReactRouter;

// let { Route, IndexRoute } = require('react-router');
const { AppContainer } = require('react-hot-loader');

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

// import App from './containers/App/App';
// import getRoutes from './routes';

// const component = (
//     <Route>
//         {getRoutes()}
//     </Route>
// );

class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

@observer
class TimerView extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed yeaaah: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

const appState =  new AppState();
ReactDOM.render(
    <AppContainer>
        <TimerView appState={appState} />
    </AppContainer>
    ,
    document.getElementById('root')
);
