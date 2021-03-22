import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
//@ts-ignore
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer.config";

const persistConfig = {
    key: 'root',
    blacklist: ['login'],
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewareList = [thunk, logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewareList));
export const store = createStore(persistedReducer,enhancer)
export const persistor = persistStore(store)