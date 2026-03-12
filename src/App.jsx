import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ContactPage from '@/pages/ContactPage';
import LegalNoticePage from '@/pages/LegalNoticePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import CookiePolicyPage from '@/pages/CookiePolicyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/aviso-legal" element={<LegalNoticePage />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/politica-cookies" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;