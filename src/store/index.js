import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeSetup =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const middlewares =
    process.env.NODE_ENV !== "production"
      ? [sagaMiddleware, logger]
      : [sagaMiddleware];

  return {
    ...createStore(rootReducer, composeSetup(applyMiddleware(...middlewares))),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
