import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import Offerings from './pages/Offerings';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CompliancePage from './pages/Compliance';
import UseCases from './pages/UseCases';
import Resources from './pages/Resources';
import Company from './pages/Company';
import CaseStudyTelecomHK from './pages/CaseStudyTelecomHK';
import BlogPost from './pages/BlogPost';
import BookDemo from './pages/BookDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/case-studies/telecom-hk" element={<CaseStudyTelecomHK />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<BlogPost />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
