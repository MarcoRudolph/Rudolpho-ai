import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InnovationPartnerSection from './components/InnovationPartnerSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import PhilosophySection from './components/PhilosophySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Impressum from './components/Impressum';

const MainPage = () => (
  <>
    <Navigation />
    <HeroSection />
    <InnovationPartnerSection />
    <ProjectsSection />
    <ServicesSection />
    <PhilosophySection />
    <CTASection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/datenschutz" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;
