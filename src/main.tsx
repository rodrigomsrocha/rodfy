import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Header } from './components/header/index.tsx'
import { ThemeProvider } from './components/theme-provider/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="max-w-5xl mx-auto">
        <Header />
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
