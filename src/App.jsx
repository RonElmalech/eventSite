import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import RTLProvider from './components/RTLProvider';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import HowItWorksPage from './pages/HowItWorksPage';
import { getServiceBySlug } from './data/services';

// Import dedicated service pages
import WeddingPage from './pages/services/WeddingPage';
import BarmitzvahPage from './pages/services/BarmitzvahPage';
import BatmitzvahPage from './pages/services/BatmitzvahPage';
import BritPage from './pages/services/BritPage';
import HennaPage from './pages/services/HennaPage';
import BirthdayPage from './pages/services/BirthdayPage';
import BusinessPage from './pages/services/BusinessPage';

function App() {
  return (
    <RTLProvider>
      <Router>
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
