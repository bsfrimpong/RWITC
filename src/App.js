import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContributeSHS from './features/shs/contributeShs';
import ContributeJHS from './features/jhs/contributeJhs';
import GalleryPage from './features/Gallery/GalleryPage';
import AboutPage from './features/AboutUs/AboutUsPage';
import XFoundryLanding from './components/xfoundryLandingPage';
import XInvasionLanding from './components/xinvasionLandingPage';
import XQuizLanding from './components/xQuizLanding'; // Add this import
import ArmbitionLanding from './components/ArmbitionLanding'; // Add this import
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contribute-shs" element={<ContributeSHS />} />
        <Route path="/contribute-jhs" element={<ContributeJHS />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/xfoundry" element={<XFoundryLanding />} />
        <Route path="/xinvasion" element={<XInvasionLanding />} />
        <Route path="/xquiz" element={<XQuizLanding />} /> {/* Add this route */}
        <Route path="/armbition" element={<ArmbitionLanding />} /> {/* Add this route */}
      </Routes>
            {/* Add Analytics component here - it will track all routes */}
         <Analytics />
    </Router>
  );
}

export default App;