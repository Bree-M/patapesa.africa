// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'        // points to your App.tsx
import './styles/index.css'           // your global styles

console.log('main.tsx: Starting to mount App...')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

console.log('main.tsx: App mounted successfully')