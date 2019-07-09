import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devToolEnhancer from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from 'redux-persist/es/storage';
import rootReducer from '../modules';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['viewer'],
};

const reducer = persistReducer(persistConfig, rootReducer);

const enhancer = compose(
  applyMiddleware(thunk),
  devToolEnhancer({
    realtime: true,
    port: 8000,
    hostname: 'localhost',
    suppressConnectError: false,
  }),
);

export const store = createStore(reducer, undefined, enhancer);

// eslint-disable-next-line no-unused-vars
let persist;

export const createPersist = () =>
  new Promise((res) => {
    persist = persistStore(store, {}, res);
  });
