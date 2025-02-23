import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContributeSHS from './features/shs/contributeShs';
import ContributeJHS from './features/jhs/contributeJhs';
import GalleryPage from './features/Gallery/GalleryPage';
import AboutPage from './features/AboutUs/AboutUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contribute-shs" element={<ContributeSHS />} />
        <Route path="/contribute-jhs" element={<ContributeJHS />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;