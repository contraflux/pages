import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Hardware from './pages/Hardware/Hardware'
import Software from './pages/Software/Software'
import Digital from './pages/Digital/Digital'
import Photography from './pages/Photography/Photography'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  )
}
