import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import conversation from "./reucers/conversation";
import historyMessage from "./reucers/historyMessage";
import settingConfig from "./reucers/config";
import userReducer from "./reucers/user";
import historyMessageTransform from "./transform/historyMessageTransform";
import { historyMessageStore, reduxPersistStore } from "./localforage";

const rootBlacklist = ['conversation', 'historyMessage']

// 引入新的persist配置
const conversationPersistConfig = {
  key: 'conversation',
  storage: reduxPersistStore,
}

const historyMessagePersistConfig = {
  key: 'historyMessage',
  storage: historyMessageStore,
  transforms: [historyMessageTransform]
}

const rootPersistConfig = {
  key: 'root',
  storage: reduxPersistStore,
  blacklist: rootBlacklist
}

// 合并所有 reducers，包括独立持久化的和通过 root 持久化的
const rootReducer = combineReducers({
  settingConfig, // 添加其他需要管理的 reducers
  userReducer,
  // ...其他 reducers ...
  conversation: persistReducer(conversationPersistConfig, conversation),
  historyMessage: persistReducer(historyMessagePersistConfig, historyMessage),
})

// 使用 rootPersistConfig 包装 rootReducer
const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer)

// 创建 store 时使用持久化后的 reducer
const store = createStore(persistedRootReducer)
export const persistor = persistStore(store)
export default store
