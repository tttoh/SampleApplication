import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from './logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
              })
            : compose;

    // put middlewares here
    const middlewares = [thunk, sagaMiddleware];

    const enhancers = composeEnhancers(applyMiddleware(...middlewares, logger));
    // logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions

    const store = createStore(rootReducer, preloadedState, enhancers);

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
