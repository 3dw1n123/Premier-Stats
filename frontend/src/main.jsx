import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import App from './App.jsx'
import Players from './Players.jsx'
import PlayerStats from './PlayerStats.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/players" element={<Players />} />
          <Route path="/player/:id/:slug" element={<PlayerStats />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </QueryClientProvider>

)
