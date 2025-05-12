import { Box } from '@mui/material';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FloatingButtons from './FloatingButtons.jsx';
import CookieConsent from './CookieConsent.jsx';

const Layout = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <Header />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          py: 4,
          pt: { xs: 12, sm: 14 },
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </Box>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </Box>
  );
};

export default Layout; 