import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import Interceptor  from './interceptors'
import './styles/main.css'

Interceptor();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
)