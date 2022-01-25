import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
