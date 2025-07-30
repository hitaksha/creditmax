// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/logo.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessLoan from './pages/BusinessLoan';
import MortgageLoan from './pages/MortgageLoan';
import HomeLoan from './pages/HomeLoan';
import PersonalLoan from './pages/PersonalLoan';
import EMICalculator from './pages/EMICalculator';
// 👇 Import your DebtPayoffCalculator
import DebtPayoffCalculator from './pages/DebtPayoffCalculator';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/mortgage-loan" element={<MortgageLoan />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          {/* 👇 New route for Debt Payoff Calculator */}
          <Route path="/debt-payoff" element={<DebtPayoffCalculator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <FloatingWhatsApp
        phoneNumber="919987593277"
        accountName="CreditMax"
        chatMessage="Hello! How can we help you today?"
        statusMessage="Typically replies within minutes"
        avatar={logo}
        allowClickAway
        notification
        onClick={() => {
          window.gtag?.('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: 'Floating Widget',
          });
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
