import { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormHelperText,
  Alert,
  CircularProgress,
  Box,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Container,
  Divider,
  Badge,
  Zoom,
  Fade,
  Tooltip
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getAllServices } from '../data/services';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimerIcon from '@mui/icons-material/Timer';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LockIcon from '@mui/icons-material/Lock';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

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

// Fun confirmation messages
const CONFIRMATION_MESSAGES = [
  "יש! עוד מעט נחגוג יחד את האירוע שלך!",
  "וואו, איזה אירוע מדהים זה הולך להיות!",
  "קבלו פיצות חינם!... טוב, רק בדקנו אם אתם ערניים 😉",
  "אנחנו כבר מתרגשים לקראת האירוע שלך!",
  "בזכותך הבוס שלנו יוכל לקנות עוד יאכטה... צוחקים, צוחקים 😄"
];

export default function ContactForm() {
  const services = [
    { id: 'wedding', title: 'חתונה' },
    { id: 'barmitzvah', title: 'בר מצווה' },
    { id: 'batmitzvah', title: 'בת מצווה' },
    { id: 'brit', title: 'ברית' },
    { id: 'birthday', title: 'יום הולדת' },
    { id: 'henna', title: 'חינה' },
    { id: 'business', title: 'עסקי' },
    { id: 'other', title: 'אחר' }
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const location = useLocation();
  const [packageInfo, setPackageInfo] = useState(null);
  const [availableSpots, setAvailableSpots] = useState(Math.floor(Math.random() * 5) + 2); // Random number between 2-6
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [funFact, setFunFact] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    eventDate: '',
    package: '',
    packagePrice: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Fun facts about events
  const funFacts = [
    "טיפ מהמומחים: אל תשכח להזמין את חמתך. לא, באמת, אל תשכח. ממש לא כדאי.",
    "המקום הכי טוב לשים את השולחן של הדודים המבוגרים? רחוק מהרמקולים וקרוב לשירותים. תודו לנו אחר כך.",
    "חוק האירועים מספר 1: ככל שהשמלה יקרה יותר, כך גדל הסיכוי שמישהו ישפוך עליה יין אדום.",
    "החלטה קשה באירוע: האם לרקוד כאילו אף אחד לא מסתכל, או לזכור שיש צלם וידאו?",
    "בכל אירוע יש לפחות אורח אחד שבא רק בשביל האוכל. בדרך כלל זה הצלם.",
    "כמות הסלפים שמצטלמים באירוע יכולה לספק חשמל לעיר קטנה למשך שבוע.",
    "אם אתם רוצים לדעת מי החברים האמיתיים שלכם, תזמינו אותם לעזור בהכנות לאירוע. מי שמגיע - שווה זהב.",
    "לכל אירוע יש את ה'נינג'ה' שלו - אותו אחד שאף אחד לא זוכר שהזמינו אבל הוא בכל התמונות.",
  ];
  
  // Load package info from localStorage on component mount
  useEffect(() => {
    const storedPackage = localStorage.getItem('selectedPackage');
    if (storedPackage) {
      const packageData = JSON.parse(storedPackage);
      setPackageInfo(packageData);
      setFormData(prev => ({
        ...prev,
        package: packageData.name,
        packagePrice: packageData.price || '',
        service: packageData.service || ''
      }));
    }
    
    // Set random fun fact
    setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);
  
  // Countdown timer effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);
  
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes - actual implementation would post to an API endpoint
      console.log('Form submitted with:', formData, packageInfo);
      
      // Get random confirmation message
      const confirmationMessage = CONFIRMATION_MESSAGES[Math.floor(Math.random() * CONFIRMATION_MESSAGES.length)];
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: confirmationMessage
      });
      
      // Decrease available spots
      setAvailableSpots(prev => Math.max(0, prev - 1));
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        eventDate: '',
        package: '',
        packagePrice: '',
        message: ''
      });
      
      setPackageInfo(null);
      localStorage.removeItem('selectedPackage');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'אירעה שגיאה בעת שליחת הטופס. אנא נסו שנית או צרו קשר ישירות.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle closing package info
  const handleClosePackage = () => {
    if (window.confirm('האם אתה בטוח? מחירים אלו הם מיוחדים ועלולים להשתנות!')) {
      setPackageInfo(null);
      localStorage.removeItem('selectedPackage');
      setFormData(prev => ({
        ...prev,
        package: '',
        packagePrice: '',
        service: ''
      }));
    }
  };
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {packageInfo ? (
        <Fade in={true} timeout={800}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              יש לך טעם מעולה! 
              <CelebrationIcon sx={{ ml: 1, verticalAlign: 'middle' }} />
            </Typography>
            <Typography variant="h6" gutterBottom color="text.secondary" sx={{ fontStyle: 'italic' }}>
              {funFact}
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            נשמח לשמוע מכם
            <SentimentSatisfiedAltIcon sx={{ ml: 1, verticalAlign: 'middle' }} />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {funFact}
          </Typography>
        </Box>
      )}
      
      <Grid container spacing={4}>
        {submitStatus && (
          <Grid item xs={12}>
            <Zoom in={true}>
              <Alert 
                severity={submitStatus.type} 
                sx={{ 
                  mb: 4, 
                  fontSize: '1.1rem',
                  '& .MuiAlert-icon': {
                    fontSize: '2rem'
                  }
                }}
                onClose={() => setSubmitStatus(null)}
              >
                {submitStatus.message}
              </Alert>
            </Zoom>
          </Grid>
        )}
        
        {packageInfo && (
          <Grid item xs={12}>
            <Zoom in={true}>
              <Paper 
                elevation={5} 
                sx={{ 
                  p: 3, 
                  mb: 4, 
                  border: '2px solid',
                  borderColor: 'primary.main',
                  bgcolor: 'rgba(0, 123, 255, 0.05)',
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0, 
                  bgcolor: 'primary.main',
                  color: 'white',
                  py: 0.5,
                  px: 2,
                  transform: 'rotate(45deg) translate(20%, -50%)',
                  transformOrigin: 'top right',
                  zIndex: 1,
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  חבילה נבחרת
                </Box>
                
                <Tooltip title="חזרה לבחירת חבילה">
                  <IconButton
                    onClick={handleClosePackage}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      color: 'primary.main',
                      '&:hover': {
                        color: 'secondary.main'
                      },
                      zIndex: 2
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
                        {packageInfo.name}
                      </Typography>
                      <Typography variant="h5" color="primary">
                        מחיר בסיס: ₪{packageInfo.price?.toLocaleString() || '0'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        למה החבילה הזו מעולה:
                      </Typography>
                      <List dense>
                        <ListItem sx={{ pb: 1 }}>
                          <ListItemIcon>
                            <LocalOfferIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={
                            <Typography>חיסכון משמעותי (וכסף לקניות בפרישמן 😉)</Typography>
                          } />
                        </ListItem>
                        <ListItem sx={{ pb: 1 }}>
                          <ListItemIcon>
                            <EmojiEventsIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="חבילה שמותאמת בדיוק לצרכים שלך" />
                        </ListItem>
                        <ListItem sx={{ pb: 1 }}>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="שירות אישי וליווי צמוד" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <SentimentSatisfiedAltIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="אנשים נחמדים שאוהבים את העבודה שלהם" />
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                  
                  {packageInfo.addons && packageInfo.addons.length > 0 && (
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                          תוספות שנבחרו:
                        </Typography>
                        <List dense>
                          {packageInfo.addonsWithPrices?.map((addon, index) => (
                            <ListItem 
                              key={index} 
                              sx={{ 
                                py: 1.5,
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                                '&:last-child': {
                                  borderBottom: 'none'
                                }
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckIcon color="primary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText 
                                primary={
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body1" component="span" fontWeight="medium">
                                      {addon.name}
                                    </Typography>
                                    <Typography variant="body1" component="span" color="primary" fontWeight="bold">
                                      {addon.price}
                                    </Typography>
                                  </Box>
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                        
                        <Box sx={{ 
                          mt: 3, 
                          p: 2, 
                          bgcolor: 'background.paper', 
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: 'divider'
                        }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" fontWeight="bold">
                              סה"כ:
                            </Typography>
                            <Typography variant="h5" color="primary" fontWeight="bold">
                              ₪{packageInfo.totalPrice?.toLocaleString() || packageInfo.price?.toLocaleString()}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  )}
                </Grid>
                
                <Box sx={{ 
                  mt: 3, 
                  p: 2, 
                  bgcolor: 'primary.light', 
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  textAlign: 'center'
                }}>
                  <Typography variant="body1" fontWeight="medium">
                    מלאו את הפרטים וניצור איתכם קשר לסגירת הפרטים האחרונים
                  </Typography>
                </Box>
              </Paper>
            </Zoom>
          </Grid>
        )}
        
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} noValidate>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
                {packageInfo ? 'כמה פרטים ונסגור עניין' : 'מלאו את הפרטים'}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="שם מלא"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name || "אנחנו לא שולחים ספאם, מבטיחים!"}
                    disabled={isSubmitting}
                    sx={{ '& .MuiInputBase-input': { fontSize: '1.1rem' } }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="טלפון"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone || "כדי שנוכל לדבר ולא רק להתכתב"}
                    disabled={isSubmitting}
                    sx={{ '& .MuiInputBase-input': { fontSize: '1.1rem' } }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.service} disabled={isSubmitting}>
                    <InputLabel id="service-label" sx={{ fontSize: '1.1rem' }}>סוג אירוע</InputLabel>
                    <Select
                      labelId="service-label"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      label="סוג אירוע"
                      sx={{ 
                        fontSize: '1.1rem',
                        '& .MuiSelect-select': {
                          padding: '12px 14px',
                          minWidth: '200px'
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: formData.service ? 'primary.main' : 'text.secondary'
                        }
                      }}
                    >
                      <MenuItem value="" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                        בחר סוג אירוע
                      </MenuItem>
                      {services.map((service) => (
                        <MenuItem key={service.id} value={service.id} sx={{ fontSize: '1.1rem' }}>
                          {service.title}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors.service || "איזה כיף, חגיגה בדרך!"}</FormHelperText>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="תאריך האירוע (אם ידוע)"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    disabled={isSubmitting}
                    helperText="אם אין תאריך, אל דאגה, נמצא יחד"
                    sx={{ '& .MuiInputBase-input': { fontSize: '1.1rem' } }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="הודעה"
                    name="message"
                    multiline
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={packageInfo ? "שאלות, בקשות מיוחדות או פשוט להגיד שלום" : "הודעה"}
                    disabled={isSubmitting}
                    helperText="מקום לחלומות, רעיונות ובקשות מיוחדות"
                    sx={{ '& .MuiInputBase-input': { fontSize: '1.1rem' } }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ 
                      py: 1.8,
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      mt: 1,
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                    startIcon={<ThumbUpAltIcon sx={{ fontSize: '1.5rem' }} />}
                  >
                    {isSubmitting ? (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                        שולח...
                      </Box>
                    ) : (
                      packageInfo ? 'כן, זה מה שאני רוצה!' : 'שליחת טופס'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
} 