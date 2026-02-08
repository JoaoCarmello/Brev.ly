import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Redirect from '../pages/Redirect'
import NotFound from '../pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/:shortCode" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}