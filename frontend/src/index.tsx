import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';
import history from './history';
import { Router, Route, Link } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister();
