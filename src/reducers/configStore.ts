import { createStore, compose, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducers } from '../reducers/index';

const enhancer = compose(applyMiddleware(thunkMiddleware));

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configStore(): Store<any> {
    return createStore(combineReducers(reducers), composeEnhancers(enhancer));
}