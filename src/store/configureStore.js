import { createStore, applyMiddleware } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { rootReducer, initialState } from './reducers'
import thunk from 'redux-thunk';

export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
}