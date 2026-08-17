import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Hardware from './pages/Hardware/Hardware'
import Software from './pages/Software/Software'
import Digital from './pages/Digital/Digital'
import Photography from './pages/Photography/Photography'
import UnderConstruction from './pages/UnderConstruction/UnderConstruction'
import ExampleProject from './pages/Hardware/projects/ExampleProject/ExampleProject'
import SyntheticApertureRadar from './pages/Hardware/projects/SyntheticApertureRadar/SyntheticApertureRadar'
import DukeAeroSolids2526 from './pages/Hardware/projects/DukeAeroSolids2526/DukeAeroSolids2526'
import DukeAeroLiquids2526 from './pages/Hardware/projects/DukeAeroLiquids2526/DukeAeroLiquids2526'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      {/* Rendered once here (not per-page) so it persists across route
          changes instead of remounting, which the navbar's slide/fade
          transition relies on. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/hardware/2026/example-project" element={<ExampleProject />} />
        <Route path="/hardware/2024/synthetic-aperture-radar" element={<SyntheticApertureRadar />} />
        <Route path="/hardware/2025/dukeaero-solids" element={<DukeAeroSolids2526 />} />
        <Route path="/hardware/2025/dukeaero-liquids" element={<DukeAeroLiquids2526 />} />
        <Route path="/software" element={<Software />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  )
}
