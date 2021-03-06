import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers";
import rootSaga from "./sagas"

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const composedEnhancers = storeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga)

  return store;
}
