import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import localforage from "localforage";
import conversation from "./reucers/conversation";
import historyMessage from "./reucers/historyMessage";
import historyMessageTransform from "./transform/historyMessageTransform";


const appReducer = combineReducers({conversation, historyMessage});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}
// const store = createStore(rootReducer);
//
// export default store;


const persistConfig = {
  key: 'root',
  storage: localforage,
  transforms: [historyMessageTransform]
}

const myPersistReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(myPersistReducer)
export const persistor = persistStore(store)
export default store