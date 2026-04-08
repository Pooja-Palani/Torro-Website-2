import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import Offerings from './pages/Offerings';
import UseCases from './pages/UseCases';
import Resources from './pages/Resources';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        
        <main className="flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
