import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages
import Dashboard from './pages/dashboard/page.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='boards' element={<Dashboard/>}/>
      </Route>

    </Routes>
  
  </BrowserRouter>
)
