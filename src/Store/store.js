//import {combineReducers,createStore} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../Reducers/Reducers';

import { createStore, applyMiddleware, compose } from 'redux';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxPromise)));

export var configureStore = (initialState = {}) =>{
  var reducer= redux.combineReducers({
    authReducer: authReducer
  });

  var store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  //var store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};
