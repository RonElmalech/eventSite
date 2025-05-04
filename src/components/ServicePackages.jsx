import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Checkbox,
  FormControlLabel,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { eventPackages } from '../data/eventPackages';

// Add-ons price mapping
const ADDONS_PRICES = {
  'DJ': 'החל מ-1,500 ש"ח',
  'מתופפים עם שופרות': '1,100 ש"ח',
  'זוהרים לרחבה': '350 ש"ח',
  'עמדת צילום (במקום מגנטים)': '1,100 ש"ח',
  'מגנטים': '300 ש"ח',
  'וידאו': '1,400 ש"ח',
  'שדרוג לקיר פרימיום': '250 ש"ח',
  'שדרוג איש צוות נוסף': '300 ש"ח',
  'שולחנות משחק': '1,900 ש"ח',
  'אמן חושים': 'מחיר בהתאמה אישית',
  'סטנד אפ בהתאמה אישית מאת אייל נרדי': 'מחיר בהתאמה אישית',
  'בלוני מספר': '450 ש"ח',
  'עמדת בלונים': '1,000 ש"ח',
  'הסעות': 'מחיר בהתאמה אישית'
};

const getPackagesForService = (serviceName) => {
  // Return packages directly using Hebrew service name
  return eventPackages[serviceName] || [];
};

// Available services for custom package
const availableServices = [
  { id: 'dj', name: 'DJ', price: 1950, checked: false },
  { id: 'stillsPhotographer', name: 'צלם סטילס', price: 1550, checked: false },
  { id: 'magnetsPhotographer', name: 'צלם מגנטים', price: 1950, checked: false },
  { id: 'videoPhotographer', name: 'צלם וידאו', price: 1550, checked: false },
  { id: 'photoWall', name: 'קיר צילום', price: 1150, checked: false },
  { id: 'gameTables', name: 'שולחנות משחק', price: 2200, checked: false },
  { id: 'photoStation', name: 'עמדת צילום', price: 1550, checked: false },
  { id: 'candyTable', name: 'שולחן ממתקים', price: 1050, checked: false },
  { id: 'drummers', name: 'מתופפים', price: 1450, checked: false },
  { id: 'buzukiPlayer', name: 'נגן בוזוקי', price: 2950, checked: false },
  { id: 'transportation', name: 'הסעות', price: 1950, checked: false },
  { id: 'magician', name: 'אמן חושים', price: 4550, checked: false }
];

const PackageCard = ({ packageInfo, isPopular, onSelect }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  
  // Calculate original price
  const originalPrice = packageInfo.price + packageInfo.savings;
  
  // Calculate total price including add-ons
  const calculateTotalPrice = () => {
    const addonsTotal = selectedAddons.reduce((total, addon) => {
      const priceStr = ADDONS_PRICES[addon];
      if (priceStr && priceStr !== 'מחיר בהתאמה אישית') {
        // Extract all numbers from the price string and combine them
        const numbers = priceStr.match(/\d+/g);
        if (numbers && numbers.length > 0) {
          // Combine all numbers to get the full price
          const price = parseInt(numbers.join(''));
          return total + price;
        }
      }
      return total;
    }, 0);
    return packageInfo.price + addonsTotal;
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedAddons([]);
  };
  
  const handleAddonToggle = (addon) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };
  
  const handleSelect = () => {
    // Create complete package info with selected add-ons
    const completePackageInfo = {
      ...packageInfo,
      selectedAddons: selectedAddons,
      originalPrice: originalPrice,
      totalPrice: calculateTotalPrice()
    };
    onSelect(completePackageInfo);
    handleClose();
  };
  
  return (
    <>
      <Card 
        elevation={3}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          position: 'relative',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: 10,
            border: `2px solid ${theme.palette.primary.main}`,
            '& .price-text': {
              color: 'primary.main',
              transform: 'scale(1.05)',
            },
            '& .package-title': {
              color: 'primary.main',
            }
          }
        }}
      >
        {isPopular && (
          <Typography 
            variant="subtitle1" 
            sx={{ 
              position: 'absolute',
              top: 10,
              left: 0,
              right: 0,
              textAlign: 'center',
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              fontSize: '1rem',
              zIndex: 1
            }}
          >
            ✓ החבילה הפופולרית ביותר
          </Typography>
        )}
        
        <CardContent sx={{ flexGrow: 1, p: 3, pt: isPopular ? 5 : 3 }}>
          <Typography 
            className="package-title"
            variant="h5" 
            component="h3" 
            gutterBottom 
            fontWeight="bold" 
            align="center"
            color="text.primary"
            sx={{ transition: 'color 0.3s ease' }}
          >
            {packageInfo.name}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography 
              className="price-text"
              variant="h4" 
              component="div" 
              align="center" 
              color="text.primary" 
              sx={{ 
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                fontSize: { xs: '1.75rem', sm: '2rem' }
              }}
            >
              ₪{packageInfo.price.toLocaleString()}
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="center"
              sx={{ 
                textDecoration: 'line-through',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 'bold',
                opacity: 0.8,
                mt: 1
              }}
            >
              במקום ₪{originalPrice.toLocaleString()}
            </Typography>
          </Box>
          
          <List disablePadding>
            {packageInfo.features.map((feature, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button 
            variant="contained" 
            fullWidth 
            color="primary"
            size="large"
            onClick={handleOpen}
            sx={{ 
              fontWeight: 'bold',
              py: 1
            }}
          >
            בחר חבילה זו
          </Button>
        </CardActions>
      </Card>
      
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div" gutterBottom>
              {packageInfo.name}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              מחיר בסיס: ₪{packageInfo.price.toLocaleString()}
            </Typography>
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            תוספות מומלצות:
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
            {packageInfo.recommendedAddons.map((addon, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  p: 2,
                  border: '1px solid',
                  borderColor: selectedAddons.includes(addon) ? 'primary.main' : 'divider',
                  borderRadius: 1,
                  cursor: 'pointer',
                  bgcolor: selectedAddons.includes(addon) ? 'rgba(25, 118, 210, 0.08)' : 'background.paper',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
                onClick={() => handleAddonToggle(addon)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckIcon 
                    color={selectedAddons.includes(addon) ? 'primary' : 'disabled'} 
                    fontSize="small" 
                  />
                  <Typography variant="body1" fontWeight={selectedAddons.includes(addon) ? 'bold' : 'normal'}>
                    {addon}
                  </Typography>
                </Box>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  {ADDONS_PRICES[addon] || 'מחיר בהתאמה אישית'}
                </Typography>
              </Box>
            ))}
          </Box>
          
          <Box sx={{ 
            p: 2, 
            bgcolor: 'background.paper', 
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'divider',
            mb: 2
          }}>
            <Typography variant="h6" gutterBottom>
              סיכום:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">מחיר בסיס:</Typography>
              <Typography variant="body1" fontWeight="bold">₪{packageInfo.price.toLocaleString()}</Typography>
            </Box>
            {selectedAddons.length > 0 && (
              <Box sx={{ mb: 1 }}>
                <Typography variant="body1" gutterBottom>תוספות:</Typography>
                {selectedAddons.map((addon, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', ml: 2 }}>
                    <Typography variant="body2">{addon}</Typography>
                    <Typography variant="body2" color="primary">
                      {ADDONS_PRICES[addon] || 'מחיר בהתאמה אישית'}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">סה"כ:</Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                ₪{calculateTotalPrice().toLocaleString()}
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            * התוספות הן אופציונליות וניתן להוסיף אותן בהמשך
          </Typography>
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="inherit">
            ביטול
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSelect}
          >
            המשך לטופס יצירת קשר
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const CustomPackageBuilder = ({ onSelect }) => {
  const [services, setServices] = useState([...availableServices]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServiceNames, setSelectedServiceNames] = useState([]);
  
  const handleToggleService = (id) => {
    const updatedServices = services.map(service => 
      service.id === id ? { ...service, checked: !service.checked } : service
    );
    
    setServices(updatedServices);
  };
  
  useEffect(() => {
    // Calculate total price based on selected services
    const newTotal = services
      .filter(service => service.checked)
      .reduce((sum, service) => sum + service.price, 0);
    
    setTotalPrice(newTotal);
    
    // Create list of selected service names
    const serviceNames = services
      .filter(service => service.checked)
      .map(service => service.name);
    
    setSelectedServiceNames(serviceNames);
  }, [services]);
  
  const handleSelectCustomPackage = () => {
    const selectedServices = services.filter(service => service.checked);
    onSelect({
      name: "חבילה מותאמת אישית",
      price: totalPrice,
      features: selectedServices.map(service => service.name)
    });
  };
  
  // Generate services query parameter
  const servicesParam = selectedServiceNames.length > 0 
    ? `&services=${encodeURIComponent(selectedServiceNames.join(','))}` 
    : '';
  
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h5" component="h3" gutterBottom align="center" fontWeight="bold" sx={{ mb: 3 }}>
        בנה חבילה מותאמת אישית
      </Typography>
      
      <Typography variant="body1" paragraph align="center">
        בחר את השירותים הנדרשים לך ואנו נתאים לך חבילה אישית
      </Typography>
      
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={service.checked}
                  onChange={() => handleToggleService(service.id)}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">{service.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₪{service.price.toLocaleString()}
                  </Typography>
                </Box>
              }
              sx={{ 
                width: '100%', 
                m: 0,
                p: 1,
                border: '1px solid',
                borderColor: service.checked ? 'primary.main' : 'divider',
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          סה"כ: ₪{totalPrice.toLocaleString()}
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSelectCustomPackage}
          component={RouterLink}
          to={`/contact?package=custom&price=${totalPrice}${servicesParam}`}
          disabled={totalPrice === 0}
          sx={{ mt: 2 }}
        >
          בנה חבילה מותאמת אישית
        </Button>
      </Box>
    </Paper>
  );
};

const ServicePackages = ({ serviceName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const packages = getPackagesForService(serviceName);
  const navigate = useNavigate();
  
  const handlePackageSelect = (packageInfo) => {
    // Calculate total price including add-ons
    const calculateTotalPrice = () => {
      const addonsTotal = (packageInfo.selectedAddons || []).reduce((total, addon) => {
        const priceStr = ADDONS_PRICES[addon];
        if (priceStr && priceStr !== 'מחיר בהתאמה אישית') {
          // Extract all numbers from the price string and combine them
          const numbers = priceStr.match(/\d+/g);
          if (numbers && numbers.length > 0) {
            // Combine all numbers to get the full price
            const price = parseInt(numbers.join(''));
            return total + price;
          }
        }
        return total;
      }, 0);
      return packageInfo.price + addonsTotal;
    };

    // Store complete package info in localStorage
    const packageData = {
      name: packageInfo.name,
      price: packageInfo.price,
      addons: packageInfo.selectedAddons || [],
      addonsWithPrices: (packageInfo.selectedAddons || []).map(addon => ({
        name: addon,
        price: ADDONS_PRICES[addon] || 'מחיר בהתאמה אישית'
      })),
      service: serviceName,
      features: packageInfo.features || [],
      totalPrice: calculateTotalPrice()
    };
    
    console.log('Package data:', packageData); // Debug log
    
    localStorage.setItem('selectedPackage', JSON.stringify(packageData));
    
    // Navigate to contact page
    navigate('/contact');
  };
  
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            mb: 6,
            color: 'primary.main'
          }}
        >
          חבילות {serviceName}
        </Typography>
        
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PackageCard 
                packageInfo={pkg} 
                isPopular={index === 1} // Mark the middle package as popular
                onSelect={handlePackageSelect}
              />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 8 }}>
          <CustomPackageBuilder onSelect={handlePackageSelect} />
        </Box>
      </Container>
    </Box>
  );
};

export default ServicePackages; 