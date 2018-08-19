import {compose, createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise'
import rootReducer from './Reducers'
let reduxCompose = compose

if (__DEV__) {
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, reduxCompose(applyMiddleware(promiseMiddleware)))
}

export default configureStore;