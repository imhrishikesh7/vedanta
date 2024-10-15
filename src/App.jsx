import './App.css'
import Footer from './Components/Footer/Footer';
import { MegaMenuWithHover } from './Components/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheImpact from './pages/TheImpact';
import KeyEsgHigh from './pages/KeyEsgHigh';
import Menu from './pages/Menu';
import ChairmanMsg from './pages/ChairmanMsg';
import NonExeDirMsg from './pages/NonExeDirMsg';
import ExeDirMsg from './pages/ExeDirMsg';
import AboutVedanta from './pages/AboutVedanta';
import OurPresence from './pages/OurPresence';
import ProductionP from './pages/ProductionP';
import ValueChain from './pages/ValueChain';
import SustainabilityInAction from './pages/SustainabilityInAction';
import SustainableGov from './pages/SustainableGov';
import SustainabilityStrategy from './pages/SustainabilityStrategy';
import OurStakeholders from './pages/OurStakeholders';
import HumanCapDev from './pages/HumanCapDev';
function App() {

  return (
    <div>
      <BrowserRouter>
      <MegaMenuWithHover />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact-we-are-creating" element={<TheImpact />} />
        <Route path="/key-esg-highlights" element={<KeyEsgHigh />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chairman-message" element={<ChairmanMsg />} />
        <Route path="/non-exe-dir-message" element={<NonExeDirMsg />} />
        <Route path="/exe-dir-message" element={<ExeDirMsg />} />
        <Route path="/about-vedanta" element={<AboutVedanta/>} />
        <Route path="/our-presence" element={<OurPresence/>} />
        <Route path="/our-production-portfolio" element={<ProductionP/>} />
        <Route path="/value-chain" element={<ValueChain/>} />
        <Route path="/sustainability-in-action" element={<SustainabilityInAction/>} />
        <Route path="/sustainability-strategy" element={<SustainabilityStrategy/>} />
        <Route path="/sustainable-governance" element={<SustainableGov/>} />
        <Route path="/our-stakeholders" element={<OurStakeholders/>} />
        <Route path="/human-capital-development" element={<HumanCapDev/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
