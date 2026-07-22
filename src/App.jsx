import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/ScrollToHash';

// Pages
import HomePage from './pages/HomePage';
import Offerings from './pages/Offerings';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CompliancePage from './pages/Compliance';
import UseCases from './pages/UseCases';
import Resources from './pages/Resources';
import Company from './pages/Company';
import TorroOneData from './pages/TorroOneData';
import CaseStudyTelecomHK from './pages/CaseStudyTelecomHK';
import CaseStudyBankIndia from './pages/CaseStudyBankIndia';
import CaseStudyESGBank from './pages/CaseStudyESGBank';
import BlogPost from './pages/BlogPost';
import BookDemo from './pages/BookDemo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex w-full min-w-0 flex-col overflow-x-clip bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        
        <main className="flex w-full min-w-0 flex-1 flex-col overflow-x-clip">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/torro-onedata" element={<TorroOneData />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/case-studies" element={<Navigate to="/case-studies/bank-india" replace />} />
            <Route path="/case-studies/telecom-hk" element={<CaseStudyTelecomHK />} />
            <Route path="/case-studies/bank-india" element={<CaseStudyBankIndia />} />
            <Route path="/case-studies/esg-bank" element={<CaseStudyESGBank />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<BlogPost />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/company" element={<Company />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
