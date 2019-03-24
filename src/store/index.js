import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers';
import * as monitorReducersEnhancer from '../reducers/monitorReducers';
import * as loggerMiddleware from '../middleware/logger';


export default function configureStore(preloadedState) {
  // const middlewares = [loggerMiddleware, thunkMiddleware];
  // const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  // const composedEnhancers = composeWithDevTools(...enhancers);

  // const store = createStore(rootReducer, preloadedState, composedEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware),
    // enhancers: [monitorReducersEnhancer]
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
};
