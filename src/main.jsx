import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { TasteProvider } from './context/TasteContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TasteProvider>
        <App />
      </TasteProvider>
    </BrowserRouter>
  </StrictMode>,
)