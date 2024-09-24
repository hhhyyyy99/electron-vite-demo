import './assets/main.css'
import 'tea-component/dist/themes/default-light.css';
import "tea-component/dist/tea-themeable.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
