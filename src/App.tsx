import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessLoan from './pages/BusinessLoan';
import MortgageLoan from './pages/MortgageLoan';
import HomeLoan from './pages/HomeLoan';
import PersonalLoan from './pages/PersonalLoan';
import EMICalculator from './pages/EMICalculator';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
