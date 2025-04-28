import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RTLProvider from './components/RTLProvider.jsx';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import { getServiceBySlug } from './data/services';

// Import dedicated service pages
import WeddingPage from './pages/services/WeddingPage.jsx';
import BarmitzvahPage from './pages/services/BarmitzvahPage.jsx';
import BatmitzvahPage from './pages/services/BatmitzvahPage.jsx';
import BritPage from './pages/services/BritPage.jsx';
import HennaPage from './pages/services/HennaPage.jsx';
import BirthdayPage from './pages/services/BirthdayPage.jsx';
import BusinessPage from './pages/services/BusinessPage.jsx';

function App() {
  return (
    <RTLProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            
            {/* Dedicated Service Pages */}
            <Route path="/services/wedding" element={<WeddingPage />} />
            <Route path="/services/barmitzvah" element={<BarmitzvahPage />} />
            <Route path="/services/batmitzvah" element={<BatmitzvahPage />} />
            <Route path="/services/brit" element={<BritPage />} />
            <Route path="/services/henna" element={<HennaPage />} />
            <Route path="/services/birthday" element={<BirthdayPage />} />
            <Route path="/services/business" element={<BusinessPage />} />
            
            {/* Dynamic service page route (for backward compatibility) */}
            <Route 
              path="/services/:slug" 
              element={<ServicePage />} 
            />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </RTLProvider>
  );
}

export default App;
