import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('Main entry point loading')

// Modern React approach using JSX
const root = createRoot(document.getElementById('root'))
root.render(
  <App />
) 