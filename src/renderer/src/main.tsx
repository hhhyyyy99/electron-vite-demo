import './assets/main.css'
import 'tea-component/dist/themes/default-light.css'
import 'tea-component/dist/tea-themeable.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store, { persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
)
