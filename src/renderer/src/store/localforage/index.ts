import localforage from 'localforage';

const dbName = 'electron-app';

export const reduxPersistStore = localforage.createInstance({
  name: dbName,
  storeName: 'reduxPersistStore',
  version: 1.0,
  description: 'Store for Redux Persist',
});

export const historyMessageStore = localforage.createInstance({
  name: dbName,
  storeName: 'historyMessageStore',
  version: 1.0,
  description: 'Store for History Message',
});