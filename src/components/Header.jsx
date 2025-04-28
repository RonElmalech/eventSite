import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { createServiceSlug } from '../utils/slugify';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const logoImage = './assets/logo-transparent.png';

  const navigationItems = [
    { name: 'בית', path: '/' },
    { name: 'איך זה עובד?', path: '/how-it-works' },
    { name: 'בר מצווה', path: '/services/barmitzvah' },
    { name: 'בת מצווה', path: '/services/batmitzvah' },
    { name: 'ברית', path: '/services/brit' },
    { name: 'חינה', path: '/services/henna' },
    { name: 'יום הולדת', path: '/services/birthday' },
    { name: 'חתונה', path: '/services/wedding' },
    { name: 'אירועים עסקיים', path: '/services/business' }
  ];

  const pages = [
    { name: 'דף הבית', path: '/' },
    { name: 'שירותים', path: '/services' },
    { name: 'איך זה עובד?', path: '/how-it-works' },
    { name: 'צור קשר', path: '/contact' },
  ];

  // Debug: log the navigation paths compared to generated slugs
  useEffect(() => {
    console.log('Navigation paths in Header:');
    const hebrewTitles = [
      "חתונות",
      "בר מצווה",
      "בת מצווה",
      "ברית",
      "חינה",
      "ימי הולדת",
      "אירועים עסקיים"
    ];
    
    const slugMap = hebrewTitles.map(title => ({
      title,
      slug: createServiceSlug(title)
    }));
    
    console.log('Hebrew titles to slugs:', slugMap);
    console.log('Navigation items:', navigationItems);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={() => {}} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={logoImage}
          alt="הקסם באירוע - החגיגה שלכם, הקסם שלנו!"
          sx={{ height: 80, width: 'auto' }}
        />
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path} 
            onClick={handleDrawerToggle}
            sx={{ 
              textAlign: 'center', 
              color: item.name === 'איך זה עובד?' ? 'white' : 'inherit', 
              textDecoration: 'none',
              bgcolor: item.name === 'איך זה עובד?' ? 'primary.main' : 'transparent',
              my: item.name === 'איך זה עובד?' ? 1 : 0,
              mx: item.name === 'איך זה עובד?' ? 2 : 0,
              borderRadius: item.name === 'איך זה עובד?' ? 1 : 0,
              '&:hover': {
                bgcolor: item.name === 'איך זה עובד?' ? 'primary.dark' : 'transparent',
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        
        {/* Contact button for mobile */}
        <ListItem 
          component={RouterLink} 
          to="/contact" 
          onClick={handleDrawerToggle}
          sx={{ 
            textAlign: 'center', 
            color: 'white', 
            textDecoration: 'none',
            bgcolor: 'secondary.main',
            my: 1,
            mx: 2,
            borderRadius: 1,
            '&:hover': {
              bgcolor: 'secondary.dark',
            }
          }}
        >
          <ListItemText primary="צור קשר" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={2} 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: 'flex' }}>
            {/* Logo section - taking minimal space */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                flexShrink: 0, // Prevent logo from shrinking
                mr: 2, // Consistent spacing after logo
              }}
            >
              <Box
                component="img"
                src={logoImage}
                alt="הקסם באירוע - החגיגה שלכם, הקסם שלנו!"
                sx={{ height: 70, width: 'auto' }}
              />
            </Box>

            {/* Mobile menu icon and logo */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  textDecoration: 'none',
                  ml: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="img"
                  src={logoImage}
                  alt="הקסם באירוע - החגיגה שלכם, הקסם שלנו!"
                  sx={{ height: 50, width: 'auto' }}
                />
              </Box>
            </Box>

            {/* Navigation buttons - directly next to logo */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              flexWrap: 'nowrap', // Prevent wrapping
              '& > .MuiButton-root': {
                // Consistent spacing for all buttons
                mx: 0.75, // Equal margin on all sides
                minWidth: 'auto', // Allow buttons to shrink to content
                px: 1, // Minimal horizontal padding
              }
            }}>
              {navigationItems.map((item) => {
                // Special styling for "How It Works" button
                if (item.name === 'איך זה עובד?') {
                  return (
                    <Button
                      key={item.name}
                      component={RouterLink}
                      to={item.path}
                      variant="contained"
                      color="primary"
                      sx={{ 
                        boxShadow: 2,
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                }
                
                // Regular navigation buttons
                return (
                  <Button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    sx={{ 
                      color: 'inherit', 
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
              
              {/* Contact Us button with more prominence */}
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/contact"
                sx={{ 
                  boxShadow: 2,
                }}
              >
                צור קשר
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 