import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

// routing on redux with promises
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ basename: '/' });
const routingMiddleware = routerMiddleware(history);

const middlewares = [
    routingMiddleware,
    promiseMiddleware
];

const devTools = (
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

const enhancers = applyMiddleware(...middlewares);

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    compose(
        enhancers,
        devTools
    )
);

import Navigator from './components/Navigator';
import SignUp from './components/SignUp';
import BlogIndex from './components/BlogIndex';
import BlogCompose from './components/BlogCompose';
import BlogPost from './components/BlogPost';

import '../assets/styles/fixes.css';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <div>
                <Navigator />
                <Switch>
                    <Route exact path='/' component={ BlogIndex } />
                    <Route exact path='/compose' component={ BlogCompose } />
                    <Route exact path='/post/:id' component={ BlogPost } />
                    <Route exact path='/signup' component={ SignUp } />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
