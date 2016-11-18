import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';

const { Route, IndexRoute } = ReactRouter;
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import App from './containers/App/App';
import getRoutes from './routes';

const component = (
    <Router>
        {getRoutes()}
    </Router>
);

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
ReactDOM.render(<App><TimerView appState={appState} /></App>, document.getElementById('root'));
