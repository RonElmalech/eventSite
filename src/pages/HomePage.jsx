import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea,
  Divider,
  Paper,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import EventIcon from '@mui/icons-material/Event';
import MoodIcon from '@mui/icons-material/Mood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { homeData, servicesData, contactData } from '../data/cmsData';
import { placeholderImages } from '../utils/placeholder';
import TestimonialCard from '../components/TestimonialCard';
import { createServiceSlug } from '../utils/slugify';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
  AnimatedSection,
  ConfettiGroup,
  createGradientAnimation
} from '../utils/animations.jsx';

// Import AOS for smooth scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define image paths directly
const transparentLogo = './assets/logo-with-slogan-transparent.png';
const weddingImg = './images/services/wedding.jpg';
const barmitzvahImg = './images/services/barmitzvah.jpg';
const hennaImg = './images/services/henna.jpg';

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionChip = motion(Chip);
const MotionContainer = motion(Container);

// Map of service slugs to actual images
const serviceImages = {
  'חתונות': weddingImg,
  'בר-מצווה': barmitzvahImg,
  'חינה': hennaImg,
  'ימי-הולדת': hennaImg,
  'ברית': barmitzvahImg,
  'אירועים-עסקיים': weddingImg,
};

// Optimize ConfettiPiece component
const ConfettiPiece = ({ color = "#ff0000", size = 8, top, left, right, bottom, delay = 0 }) => {
  const shape = Math.floor(Math.random() * 2); // Reduced to 2 shapes
  const borderRadius = shape === 0 ? '0%' : '50%';
  const width = size;
  const height = size;
  
  return (
    <MotionBox
      sx={{
        position: 'absolute',
        width: width,
        height: height,
        borderRadius: borderRadius,
        background: color,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
      initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
      animate={{ 
        y: [0, 150 + Math.random() * 200], // Reduced movement range
        x: [0, (Math.random() - 0.5) * 100], // Reduced movement range
        opacity: [0, 0.8, 0],
        rotate: [0, Math.random() * 180] // Reduced rotation
      }}
      transition={{
        duration: 5 + Math.random() * 3, // Reduced duration
        repeat: Infinity,
        repeatDelay: 2 + Math.random() * 3 + delay, // Reduced delay
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Create an array of images for gallery
  const imageGallery = [
    weddingImg,
    barmitzvahImg,
    hennaImg
  ];

  const changeImage = (direction) => {
    if (direction === 'next') {
      setImageIndex((prev) => (prev === imageGallery.length - 1 ? 0 : prev + 1));
    } else {
      setImageIndex((prev) => (prev === 0 ? imageGallery.length - 1 : prev - 1));
    }
  };

  // Optimize animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '50px'
  });

  // Optimize AOS initialization
  useEffect(() => {
    const isLowEndDevice = () => {
      const connection = navigator.connection || 
                         navigator.mozConnection || 
                         navigator.webkitConnection;
      
      if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
        return true;
      }
      
      if (navigator.deviceMemory && navigator.deviceMemory <= 2) {
        return true;
      }
      
      return false;
    };

    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 100
    });

    const handleResize = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    window.addEventListener('load', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Optimize initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedSection isMobile={isMobile} theme={theme} position="top-left">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
              position: 'relative',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${imageGallery[imageIndex]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: { xs: '70vh', md: '80vh' },
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
              overflow: 'hidden',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              zIndex: 2
            }}
          >
            {/* Image navigation controls */}
            <IconButton 
              sx={{ 
                position: 'absolute', 
                left: 20, 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                zIndex: 2
              }}
              onClick={() => changeImage('prev')}
            >
              <ArrowForwardIcon />
            </IconButton>
            <IconButton 
              sx={{ 
                position: 'absolute', 
                right: 20, 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                zIndex: 2
              }}
              onClick={() => changeImage('next')}
            >
              <ArrowBackIcon />
            </IconButton>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <MotionBox 
                sx={{ py: 4 }}
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <MotionBox 
                  component="img"
                  src={transparentLogo}
                  alt="הקסם באירוע"
                  sx={{ 
                    width: 'auto',
                    height: 300,
                    display: 'block',
                    mx: 'auto',
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.2
                  }}
                />
                <MotionTypography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  variants={fadeInUp}
                >
                  כל בעלי המקצוע לאירוע מושלם במקום אחד!
                </MotionTypography>
                <MotionTypography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  variants={fadeInUp}
                >
                  חבילות מותאמות אישית , מחירים הוגנים והתחייבות לאירוע בלתי נשכח...
                </MotionTypography>

                <MotionBox 
                  sx={{ 
                    mb: 6, 
                    mt: 4, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    gap: 2 
                  }}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionChip 
                    icon={<PersonIcon sx={{ color: 'white !important' }} />} 
                    label="איש קשר אחד לכל האירוע" 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.15)', 
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1rem',
                      py: 2,
                      borderRadius: 6,
                      '& .MuiChip-icon': { color: 'white' }
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0px 0px 15px rgba(255,255,255,0.5)' 
                    }}
                  />
                  <MotionChip 
                    icon={<AccessTimeIcon sx={{ color: 'white !important' }} />} 
                    label="חוסך לכם זמן וכאב ראש" 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.15)', 
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1rem',
                      py: 2,
                      borderRadius: 6 
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0px 0px 15px rgba(255,255,255,0.5)' 
                    }}
                  />
                  <MotionChip 
                    icon={<LocalAtmIcon sx={{ color: 'white !important' }} />} 
                    label="חוסך לכם כסף" 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.15)', 
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1rem',
                      py: 2,
                      borderRadius: 6 
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0px 0px 15px rgba(255,255,255,0.5)' 
                    }}
                  />
                </MotionBox>

                <MotionBox 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: 2, 
                    flexWrap: 'wrap' 
                  }}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: 1, staggerChildren: 0.2 }}
                >
                  <MotionButton 
                    component={RouterLink} 
                    to="/contact" 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.8, 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      borderRadius: 3
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    בואו נפיק לכם אירוע חלומי
                  </MotionButton>
                  <MotionButton 
                    component="a" 
                    href={`tel:${contactData.phone}`}
                    variant="outlined" 
                    size="large" 
                    startIcon={<CallIcon />}
                    sx={{ 
                      color: 'white', 
                      borderColor: 'white',
                      px: 3,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': { 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: 'white'
                      }
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contactData.phone}
                  </MotionButton>
                  <MotionButton 
                    component="a" 
                    href={contactData.socialMedia.whatsapp} 
                    variant="outlined" 
                    size="large" 
                    startIcon={<WhatsAppIcon />}
                    sx={{ 
                      color: 'white', 
                      borderColor: 'white',
                      px: 3,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': { 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: 'white'
                      }
                    }}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp
                  </MotionButton>
                </MotionBox>
              </MotionBox>
            </Container>
          </MotionBox>
        </AnimatedSection>
      </Box>

      {/* Services Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box 
          ref={ref}
          sx={{ 
            py: { xs: 8, md: 10 }, 
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), url(${homeData.services?.backgroundImage || placeholderImages.decoration})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          {/* Animated background elements */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 30, 0],
              y: [0, 40, 0]
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              top: '-50px',
              left: '-50px',
              zIndex: 1
            }}
          />
          
          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.light}33 0%, transparent 70%)`,
              top: '-50px',
              right: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              bottom: '-50px',
              left: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.light}33 0%, transparent 70%)`,
              bottom: '-50px',
              right: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Strategic center circle */}
          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '300px', sm: '400px' },
              height: { xs: '300px', sm: '400px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <MotionBox 
              sx={{ textAlign: 'center', mb: 6 }}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
            >
              <MotionTypography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 'bold', 
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
              >
                כל השירותים תחת קורת גג אחת
              </MotionTypography>
              <MotionTypography 
                variant="h6" 
                sx={{ 
                  maxWidth: 700, 
                  mx: 'auto', 
                  color: 'text.secondary', 
                  mb: 2 
                }}
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
              >
                מכינים לכם חבילה מותאמת אישית עם הכל כלול - ללא צורך בתיאום עם עשרות ספקים
              </MotionTypography>
              <MotionTypography 
                variant="body1" 
                sx={{ 
                  maxWidth: 700, 
                  mx: 'auto', 
                  mb: 4 
                }}
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
              >
                פתרון מושלם עבור אלו מכם שרוצים אירוע איכותי אך אין להם זמן או סבלנות להתעסק בפרטים הקטנים
              </MotionTypography>
            </MotionBox>

            {/* Services Grid */}
            <Box 
              data-aos="fade" 
              data-aos-once="true"
              sx={{ 
                mb: 6,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 4,
                position: 'relative'
              }}
            >
              {servicesData.services.map((service, index) => {
                const slug = createServiceSlug(service.title);
                
                return (
                  <Box
                    key={index}
                    sx={{
                      height: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      overflow: 'hidden',
                      bgcolor: 'background.paper',
                      boxShadow: 2,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: 5
                      }
                    }}
                  >
                    {/* Fixed-size image container */}
                    <Box 
                      sx={{ 
                        height: '180px', 
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <Box
                        component="img"
                        src={service.imageUrl || serviceImages[createServiceSlug(service.title)] || placeholderImages[slug] || placeholderImages.eventGeneric}
                        alt={service.title}
                        loading="lazy"
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}
                      />
                    </Box>
                    
                    {/* Fixed-size content area */}
                    <Box sx={{ 
                      p: 2, 
                      height: '160px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box
                        sx={{ 
                          height: '50px',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{ 
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ height: '90px', overflow: 'hidden' }}>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {service.shortDescription || service.description}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Fixed-size button area */}
                    <Box sx={{ 
                      p: 2, 
                      mt: 'auto',
                      height: '60px',
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      borderTop: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <Button 
                        component={RouterLink} 
                        to={`/services/${slug}`}
                        color="primary" 
                        endIcon={<ArrowBackIcon />}
                        size="small"
                        sx={{ 
                          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          '&:hover': {
                            transform: 'translateX(-5px)'
                          }
                        }}
                      >
                        למידע נוסף
                      </Button>
                      <Button 
                        component={RouterLink} 
                        to="/contact" 
                        color="secondary"
                        variant="outlined"
                        size="small"
                        sx={{ 
                          borderRadius: 6,
                          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 2px 5px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        הצעת מחיר
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <MotionBox 
              sx={{ textAlign: 'center', mt: 6 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <MotionButton 
                component={RouterLink} 
                to="/contact" 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  fontWeight: 'bold',
                  borderRadius: 2,
                  fontSize: '1.1rem'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                לקבלת הצעת מחיר מותאמת אישית לאירוע שלכם
              </MotionButton>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* Add Why Choose Us section */}
      <WhyChooseUs />

      {/* Contact CTA Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box 
          sx={{ 
            py: { xs: 8, md: 10 }, 
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          {/* Animated background elements */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 30, 0],
              y: [0, 40, 0]
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              top: '-50px',
              left: '-50px',
              zIndex: 1
            }}
          />
          
          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.light}33 0%, transparent 70%)`,
              top: '-50px',
              right: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              bottom: '-50px',
              left: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '200px', sm: '300px' },
              height: { xs: '200px', sm: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.light}33 0%, transparent 70%)`,
              bottom: '-50px',
              right: '-50px',
              zIndex: 1
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Strategic center circle */}
          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: '300px', sm: '400px' },
              height: { xs: '300px', sm: '400px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, transparent 70%)`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <MotionTypography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ fontWeight: 'bold' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              מוכנים להפוך את החלום שלכם למציאות?
            </MotionTypography>
            
            <MotionTypography 
              variant="h5" 
              sx={{ mb: 5, maxWidth: 800, mx: 'auto', fontWeight: 'normal' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              הקסם באירוע - כל מה שאתם צריכים לאירוע מושלם במקום אחד
            </MotionTypography>
            
            <MotionBox 
              sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <MotionButton 
                component={RouterLink} 
                to="/contact" 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 2, 
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  borderRadius: 2
                }}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                בואו ניצור ביחד את האירוע שלכם
              </MotionButton>
              
              <MotionButton 
                component="a" 
                href={contactData.socialMedia.whatsapp} 
                variant="outlined" 
                color="inherit" 
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ 
                  px: 4, 
                  py: 2, 
                  borderColor: 'white',
                  borderRadius: 2,
                  fontSize: '1.2rem'
                }}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  boxShadow: '0px 0px 15px rgba(255,255,255,0.2)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                דברו איתנו בWhatsApp
              </MotionButton>
            </MotionBox>
            
            <MotionTypography 
              variant="body1" 
              sx={{ mt: 4, opacity: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              או התקשרו עכשיו: <MotionButton 
                component="a" 
                href={`tel:${contactData.phone}`}
                sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  fontSize: '1.1rem'
                }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0px 0px 8px rgba(255,255,255,0.8)',
                }}
              >{contactData.phone}</MotionButton>
            </MotionTypography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage; 