import localforage from 'localforage'

export const historyListStore = {
  get: (key: string) => localforage.getItem(key),
  set: (key: string, value: any) => localforage.setItem(key, value),
  remove: (key: string) => localforage.removeItem(key),
}


export const setMessage = (keys:Array<string>, value: any) => {
  historyListStore.set(keys.join('-'), value)
}
export const getMessage = (keys:Array<string>) => {
  return historyListStore.get(keys.join('-'))
}
export const removeMessage = (keys:Array<string>) => {
  return historyListStore.remove(keys.join('-'))
}