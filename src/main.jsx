import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n.js'
import App from './App.jsx'
import './input.css'

// LiteSpeed serves /career/ etc. — strip before React so assets & routes match
if (typeof window !== 'undefined') {
  const { pathname, search, hash } = window.location
  if (pathname.length > 1 && pathname.endsWith('/')) {
    window.history.replaceState(null, '', `${pathname.replace(/\/+$/, '')}${search}${hash}`)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
