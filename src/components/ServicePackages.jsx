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
  useMediaQuery
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import { Link as RouterLink } from 'react-router-dom';

// Predefined packages for all services
const packageData = {
  basic: {
    name: "חבילה בסיסית",
    price: 4000,
    features: [
      "תכנון וליווי אישי",
      "DJ לכל האירוע",
      "צלם סטילס",
      "עמדת צילום בסיסית"
    ]
  },
  premium: {
    name: "חבילה פרימיום",
    price: 6250,
    features: [
      "כל מה שבחבילה הבסיסית",
      "צלם וידאו",
      "צלם מגנטים",
      "קיר צילום מעוצב",
      "שולחן ממתקים"
    ]
  },
  allInclusive: {
    name: "חבילה הכל כלול",
    price: 10000,
    features: [
      "כל מה שבחבילה הפרימיום",
      "מתופפים לקבלת פנים",
      "הסעות (עד 50 ק״מ)",
      "נגן בוזוקי לקבלת פנים",
      "אמן חושים"
    ]
  }
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
  
  return (
    <Card 
      elevation={isPopular ? 8 : 3}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8
        },
        border: isPopular ? `2px solid ${theme.palette.secondary.main}` : 'none'
      }}
    >
      {isPopular && (
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bgcolor: 'secondary.main', 
            color: 'white',
            py: 0.5,
            px: 2,
            borderBottomLeftRadius: 8
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            פופולרי ביותר
          </Typography>
        </Box>
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" align="center">
          {packageInfo.name}
        </Typography>
        
        <Typography variant="h4" component="div" align="center" color="primary.main" sx={{ mb: 3 }}>
          ₪{packageInfo.price.toLocaleString()}
        </Typography>
        
        <List disablePadding>
          {packageInfo.features.map((feature, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckIcon color="success" fontSize="small" />
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
          color={isPopular ? "secondary" : "primary"}
          size="large"
          component={RouterLink}
          to={`/contact?package=${encodeURIComponent(packageInfo.name)}&price=${packageInfo.price}`}
          onClick={() => onSelect(packageInfo)}
          sx={{ 
            fontWeight: 'bold',
            py: 1
          }}
        >
          בחר חבילה זו
        </Button>
      </CardActions>
    </Card>
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
        <Typography variant="h5" component="div" color="primary.main" sx={{ mb: 2 }}>
          סה"כ: ₪{totalPrice.toLocaleString()}
        </Typography>
        
        <Button 
          variant="contained" 
          color="secondary"
          size="large"
          component={RouterLink}
          to={`/contact?package=custom&price=${totalPrice}${servicesParam}`}
          onClick={handleSelectCustomPackage}
          disabled={totalPrice === 0}
          startIcon={<BuildIcon />}
          sx={{ 
            fontWeight: 'bold',
            py: 1.5,
            px: 4
          }}
        >
          צור קשר לקבלת הצעת מחיר
        </Button>
      </Box>
    </Paper>
  );
};

const ServicePackages = ({ serviceName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handlePackageSelect = (packageInfo) => {
    // This could store selected package in localStorage or context
    console.log('Selected package:', packageInfo);
    // You could also implement analytics tracking here
  };
  
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom fontWeight="bold">
          החבילות שלנו ל{serviceName}
        </Typography>
        
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          בחר את החבילה המתאימה לצרכים שלך או בנה חבילה מותאמת אישית
        </Typography>
        
        {/* Predefined Packages */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <PackageCard 
              packageInfo={packageData.basic} 
              onSelect={handlePackageSelect} 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PackageCard 
              packageInfo={packageData.premium} 
              isPopular={true}
              onSelect={handlePackageSelect} 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PackageCard 
              packageInfo={packageData.allInclusive} 
              onSelect={handlePackageSelect} 
            />
          </Grid>
        </Grid>
        
        <Divider sx={{ mb: 8 }} />
        
        {/* Custom Package Builder */}
        <CustomPackageBuilder onSelect={handlePackageSelect} />
      </Container>
    </Box>
  );
};

export default ServicePackages; 