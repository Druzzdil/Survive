import {createStore} from 'redux';
import rootReducer from './Reducers'

const configureStore = () => {
    return createStore(rootReducer)
};

export default configureStore;