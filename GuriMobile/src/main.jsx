import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContextProvider from "./Context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <UserContextProvider>

  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </UserContextProvider>
)
