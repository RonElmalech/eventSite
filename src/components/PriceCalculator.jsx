import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Alert,
  List,
  ListItem,
  ListItemText,
  Grid,
  useTheme,
  useMediaQuery,
  Chip,
  IconButton
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import CloseIcon from '@mui/icons-material/Close';
import { eventPackages } from '../data/eventPackages';

// Import the same ADDONS_PRICES from ServicePackages
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

// Helper function to extract price from a string
const extractPrice = (priceStr) => {
  if (!priceStr || priceStr === 'מחיר בהתאמה אישית') return 0;
  const numbers = priceStr.match(/\d+/g);
  if (numbers && numbers.length > 0) {
    return parseInt(numbers.join(''));
  }
  return 0;
};

// Map Hebrew service names to their English route names
const serviceRouteMap = {
  'חתונות': 'wedding',
  'בר מצווה': 'barmitzvah',
  'בת מצווה': 'batmitzvah',
  'ברית': 'brit',
  'ימי הולדת': 'birthday',
  'אירועים עסקיים': 'business',
  'חינה': 'henna'
};

const PriceCalculator = ({ onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // States
  const [eventType, setEventType] = useState('');
  const [packageType, setPackageType] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [addons, setAddons] = useState([]);
  const [availableAddons, setAvailableAddons] = useState([]);
  const [guestCount, setGuestCount] = useState(100);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  
  // Available event types
  const eventTypes = Object.keys(eventPackages);
  
  // Reset form when event type changes
  useEffect(() => {
    setPackageType('');
    setSelectedPackage(null);
    setAddons([]);
    setGuestCount(100);
    setResult(null);
    setError('');
    
    // Set available addons based on all packages for this event type
    if (eventType) {
      const packages = eventPackages[eventType] || [];
      const allAddons = new Set();
      
      packages.forEach(pkg => {
        if (pkg.recommendedAddons) {
          pkg.recommendedAddons.forEach(addon => allAddons.add(addon));
        }
      });
      
      setAvailableAddons([...allAddons].filter(addon => ADDONS_PRICES[addon]));
    } else {
      setAvailableAddons([]);
    }
  }, [eventType]);
  
  // Update selected package when package type changes
  useEffect(() => {
    if (eventType && packageType) {
      const packages = eventPackages[eventType] || [];
      const foundPackage = packages.find(pkg => pkg.name === packageType);
      setSelectedPackage(foundPackage || null);
      setAddons([]);
    } else {
      setSelectedPackage(null);
    }
  }, [eventType, packageType]);
  
  // Handle addon selection
  const handleAddonToggle = (addon) => {
    setAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };
  
  // Calculate total price including addons
  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;
    
    // Base package price
    let total = selectedPackage.price;
    
    // Add addon prices
    addons.forEach(addon => {
      const priceStr = ADDONS_PRICES[addon];
      const addonPrice = extractPrice(priceStr);
      total += addonPrice;
    });
    
    return total;
  };
  
  // Calculate price per guest
  const calculatePricePerGuest = () => {
    const totalPrice = calculateTotalPrice();
    if (guestCount <= 0) return 0;
    return totalPrice / guestCount;
  };
  
  // Perform calculation
  const handleCalculate = () => {
    if (!eventType) {
      setError('נא לבחור סוג אירוע');
      return;
    }
    
    if (!packageType) {
      setError('נא לבחור חבילה');
      return;
    }
    
    if (guestCount <= 0) {
      setError('מספר אורחים חייב להיות מספר חיובי');
      return;
    }
    
    const totalPrice = calculateTotalPrice();
    const pricePerGuest = calculatePricePerGuest();
    
    setResult({
      totalPrice,
      pricePerGuest,
      package: selectedPackage.name,
      eventType,
      guestCount,
      addons
    });
    
    setError('');
  };
  
  // Reset calculator
  const handleReset = () => {
    setEventType('');
    setPackageType('');
    setSelectedPackage(null);
    setAddons([]);
    setGuestCount(100);
    setResult(null);
    setError('');
  };
  
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, border: '2px solid', borderColor: 'primary.main', bgcolor: 'background.default', position: 'relative' }}>
      {/* Close Button (X) */}
      {onClose && (
        <IconButton 
          aria-label="close"
          onClick={onClose}
          sx={{ 
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              bgcolor: 'action.hover'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    
      <Typography 
        variant="h4" 
        component="h2" 
        align="center" 
        sx={{ 
          fontWeight: 'bold',
          mb: 4,
          color: 'primary.main'
        }}
      >
        מחשבון מחיר לאורח
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        {/* Main form section */}
        <Box sx={{ flex: '1 1 50%', bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1 }}>
          {/* Event Type Selection */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="event-type-label">סוג אירוע</InputLabel>
            <Select
              labelId="event-type-label"
              id="event-type"
              value={eventType}
              label="סוג אירוע"
              onChange={(e) => setEventType(e.target.value)}
            >
              {eventTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Package Selection */}
          <FormControl fullWidth sx={{ mb: 3 }} disabled={!eventType}>
            <InputLabel id="package-type-label">חבילה</InputLabel>
            <Select
              labelId="package-type-label"
              id="package-type"
              value={packageType}
              label="חבילה"
              onChange={(e) => setPackageType(e.target.value)}
            >
              {eventType && eventPackages[eventType]?.map((pkg) => (
                <MenuItem key={pkg.name} value={pkg.name}>{pkg.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Package Details */}
          {selectedPackage && (
            <Paper 
              elevation={1} 
              sx={{ 
                p: 2, 
                mb: 3, 
                bgcolor: 'white',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                פרטי החבילה:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                מחיר בסיס: ₪{selectedPackage.price.toLocaleString()}
              </Typography>
              {selectedPackage.savings > 0 && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  חיסכון: ₪{selectedPackage.savings.toLocaleString()}
                </Typography>
              )}
              <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5 }}>
                כולל:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {selectedPackage.features.map((feature, idx) => (
                  <Typography component="li" variant="body2" key={idx}>
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Paper>
          )}
          
          {/* Guest Count */}
          <TextField
            fullWidth
            label="מספר אורחים משוער"
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
            value={guestCount}
            onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
            sx={{ mb: 3 }}
          />
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleCalculate}
              startIcon={<CalculateIcon />}
              disabled={!eventType || !packageType || guestCount <= 0}
              sx={{ 
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              חשב מחיר
            </Button>
            
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={handleReset}
              sx={{ 
                py: 1.5,
                minWidth: 100
              }}
            >
              איפוס
            </Button>
          </Box>
          
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
        
        {/* Addons Section */}
        <Box sx={{ flex: '1 1 50%', bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1 }}>
          {/* Addons Section - Only shown when event type and package are selected */}
          {eventType && packageType ? (
            <>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                תוספות אפשריות:
              </Typography>
              
              <FormGroup sx={{ mb: 3 }}>
                {availableAddons.map((addon) => (
                  <FormControlLabel
                    key={addon}
                    control={
                      <Checkbox 
                        checked={addons.includes(addon)}
                        onChange={() => handleAddonToggle(addon)}
                        disabled={!selectedPackage}
                        color="primary"
                      />
                    }
                    label={
                      <Box>
                        <Typography variant="body1">{addon}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ADDONS_PRICES[addon]}
                        </Typography>
                      </Box>
                    }
                    sx={{ mb: 1 }}
                  />
                ))}
              </FormGroup>
              
              {availableAddons.length === 0 && (
                <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  אין תוספות זמינות לחבילה זו
                </Typography>
              )}
            </>
          ) : (
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="text.secondary" sx={{ fontStyle: 'italic', textAlign: 'center', p: 4 }}>
                בחר סוג אירוע וחבילה כדי לראות תוספות אפשריות
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      
      {/* Results Section - More Detailed and Calculation-Like */}
      {result && (
        <Box sx={{ mt: 4 }}>
          <Divider sx={{ mb: 3, borderColor: 'primary.light' }} />
          
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              bgcolor: 'white',
              color: 'text.primary',
              borderRadius: 2,
              border: '2px solid',
              borderColor: 'secondary.main',
              boxShadow: 2
            }}
          >
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                mb: 3, 
                fontWeight: 'bold', 
                color: 'secondary.main',
                borderBottom: '2px solid',
                borderColor: 'secondary.main',
                pb: 1
              }}
            >
              תוצאות החישוב
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
              {/* Package Details */}
              <Box sx={{ flex: '1 1 60%' }}>
                <Paper variant="outlined" sx={{ p: 2, mb: 2, bgcolor: 'background.paper' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" fontWeight="bold">מחיר בסיס:</Typography>
                    <Typography variant="body1">₪{selectedPackage.price.toLocaleString()}</Typography>
                  </Box>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 'bold' }}>
                    כולל:
                  </Typography>
                  <Box component="ul" sx={{ mt: 1, mb: 2 }}>
                    {selectedPackage.features.map((feature, idx) => (
                      <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  
                  {result.addons.length > 0 && (
                    <>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        תוספות שנבחרו:
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        {result.addons.map((addon) => (
                          <Box key={addon} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2">{addon}</Typography>
                            <Typography variant="body2" color="secondary.main">{ADDONS_PRICES[addon]}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </>
                  )}
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" fontWeight="bold">מספר אורחים:</Typography>
                    <Typography variant="body1">{result.guestCount.toLocaleString()}</Typography>
                  </Box>
                </Paper>
              </Box>
              
              {/* Calculation Results */}
              <Box sx={{ flex: '1 1 40%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Price Per Guest Box */}
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'secondary.main',
                  color: 'white',
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 2
                }}>
                  <Typography variant="h6" gutterBottom>
                    מחיר לאורח:
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    ₪{Math.round(result.pricePerGuest).toLocaleString()}
                  </Typography>
                </Box>
                
                {/* Total Price Box */}
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 2
                }}>
                  <Typography variant="h6" gutterBottom>
                    סה"כ מחיר החבילה:
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    ₪{result.totalPrice.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}

      {/* Close Button */}
      {onClose && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
            sx={{ minWidth: 120 }}
          >
            סגור
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default PriceCalculator; 