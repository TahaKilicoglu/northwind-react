import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers'
import thunk from 'redux-thunk';

export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
}