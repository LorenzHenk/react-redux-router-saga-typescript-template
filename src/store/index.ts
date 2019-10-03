import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import { chatReducer } from './chat/reducers';
import { systemReducer } from './system/reducers';

import rootSaga from './sagas';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history), // used for syncing react-router with redux
  system: systemReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleWares: Middleware[] = [routerMiddleware(history), sagaMiddleware];

  const middleWareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
