import React, { useRef, useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
  IconButton,
  Tooltip,
  Fab
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { contactData } from '../data/cmsData';
import { placeholderImages } from '../utils/placeholder';

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionContainer = motion(Container);
const MotionAvatar = motion(Avatar);
const MotionFab = motion(Fab);
const MotionIconButton = motion(IconButton);
const MotionDivider = motion(Divider);
const MotionCard = motion(Card);

const HowItWorksPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStepIndices, setActiveStepIndices] = useState([]);
  const timelineRef = useRef(null);
  const heroRef = useRef(null);
  const stepRefs = useRef([]);

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const timelineProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // Steps data
  const steps = [
    {
      id: 1,
      title: "חזון",
      subtitle: "הפכו את החלום למציאות",
      description: "הפגישה הראשונית היא המקום שבו אנו מקשיבים לחלומות שלכם, מבינים את הצרכים הייחודיים, ומתחילים לרקום את החזון המושלם לאירוע שלכם. עם הצוות המקצועי והמנוסה שלנו, נעצב יחד תוכנית מפורטת שממזגת את סגנונכם האישי עם הניסיון והידע שלנו.",
      icon: <EventNoteIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.primary.main,
      benefits: [
        "ייעוץ אישי ומקצועי ללא התחייבות",
        "תכנון מותאם אישית לסגנון ולתקציב שלכם",
        "גישה למאגר רעיונות והשראה לאירועים"
      ],
      image: placeholderImages.meetingImage || placeholderImages.eventHero,
      longDescription: "בפגישה הראשונית אנו מקדישים זמן להבין את החזון שלכם לאירוע המושלם. צוות המומחים שלנו יקשיב לכל פרט, ילמד להכיר את הטעם וההעדפות שלכם, ויציג בפניכם אפשרויות מגוונות שיתאימו בדיוק לסגנון שלכם. אנו מאמינים שכל אירוע צריך לשקף את האישיות הייחודית של בעליו, ולכן ניתן דגש רב על התאמה אישית."
    },
    {
      id: 2,
      title: "תכנון",
      subtitle: "יצירת האסטרטגיה המושלמת",
      description: "לאחר גיבוש החזון, צוות התכנון שלנו מתחיל לעבוד על כל הפרטים הקטנים והגדולים. אנו מתאמים ספקים מובילים, מעצבים תפריטים מרהיבים, ומתכננים את לוח הזמנים המדויק שיבטיח זרימה מושלמת ביום האירוע.",
      icon: <TouchAppIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.secondary.main,
      benefits: [
        "תיאום ספקים איכותיים וחבילות במחירים מיוחדים",
        "יצירת לוח זמנים מפורט ותוכנית עבודה",
        "ליווי אישי לאורך כל תהליך התכנון"
      ],
      image: placeholderImages.planningImage || placeholderImages.eventHero,
      longDescription: "שלב התכנון הוא המפתח להצלחת האירוע. הצוות המקצועי שלנו מטפל בכל פרט, מבחירת המקום המושלם, דרך תיאום ספקים איכותיים, ועד לתכנון מדויק של לוח הזמנים. אנו מתמחים ביצירת זרימה מושלמת שתאפשר לכם ולאורחיכם ליהנות מכל רגע. הניסיון העשיר שלנו מבטיח שנדע להתמודד עם כל אתגר ולהציע פתרונות יצירתיים שיהפכו את האירוע שלכם לחוויה בלתי נשכחת."
    },
    {
      id: 3,
      title: "ביצוע",
      subtitle: "הוצאה לפועל של כל הפרטים",
      description: "ביום האירוע עצמו, צוות מקצועי מלא יהיה נוכח בשטח לוודא שכל פרט מתבצע בדיוק כפי שתוכנן. מנהל האירוע האישי שלכם יהיה זמין לכל צורך, כך שתוכלו להתרכז בליהנות ולחגוג ללא דאגות.",
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.primary.dark,
      benefits: [
        "ניהול מקצועי ביום האירוע",
        "צוות מיומן שדואג לכל פרט",
        "גיבוי לכל מקרה וטיפול מיידי בכל אתגר"
      ],
      image: placeholderImages.executionImage || placeholderImages.eventHero,
      longDescription: "ביום האירוע, הצוות המקצועי שלנו מגיע מוקדם לוודא שהכל מוכן ומסודר לפי התוכנית. מנהל האירוע האישי שלכם יהיה צמוד אליכם לאורך כל האירוע, ידאג שלוח הזמנים נשמר ויטפל בכל פרט קטן. צוות מיומן יעבוד מאחורי הקלעים כדי להבטיח שהכל מתנהל בצורה חלקה, כך שאתם והאורחים שלכם תוכלו להתמקד בחגיגה ובשמחה."
    },
    {
      id: 4,
      title: "חגיגה",
      subtitle: "רגעים בלתי נשכחים",
      description: "זה הרגע שאליו חיכיתם - הזמן ליהנות, לחגוג וליצור זכרונות מיוחדים עם האנשים היקרים לכם. אנו דואגים שכל רגע יהיה מושלם, שכל פרט יהיה מדויק, ושהאווירה תהיה בדיוק כפי שדמיינתם.",
      icon: <CelebrationIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.secondary.dark,
      benefits: [
        "חוויה מושלמת ללא דאגות",
        "זכרונות שיישארו איתכם לנצח",
        "אירוע ייחודי שישקף את האישיות שלכם"
      ],
      image: placeholderImages.celebrationImage || placeholderImages.eventHero,
      longDescription: "זהו השיא של כל התכנון והעבודה - הרגע שבו אתם חוגגים עם האנשים היקרים לכם. אנו דואגים שכל פרט יהיה מושלם, מהקבלת פנים חמה, דרך ארוחה מרהיבה, ועד לסיום מרגש. הניסיון שלנו מבטיח שהאווירה תהיה בדיוק כפי שדמיינתם, והזכרונות שתיצרו ילוו אתכם לאורך שנים רבות."
    }
  ];

  // Scroll to next section
  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, scaleY: 0, originY: 0 },
    visible: { 
      opacity: 1, 
      scaleY: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(0,0,0,0.2)",
        "0px 0px 15px rgba(0,0,0,0.4)",
        "0px 0px 0px rgba(0,0,0,0.2)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // This component will be used for each timeline step
  const TimelineStep = ({ step, index, isLastStep }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const isEven = index % 2 === 0;
    
    // Update active steps based on visibility - with proper dependency array
    useEffect(() => {
      if (isInView) {
        setActiveStepIndices(prev => {
          if (!prev.includes(index)) {
            return [...prev, index];
          }
          return prev;
        });
      }
      // We're removing the cleanup function that removes indices
      // This prevents constant toggling when elements are at viewport edge
    }, [isInView, index]);
    
    // We'll use this to alternate between left and right placement
    const contentPosition = isEven ? 'right' : 'left';
    
    useEffect(() => {
      // Store the ref for each step
      stepRefs.current[index] = ref;
    }, [index]);

    return (
      <MotionBox 
        ref={ref}
        sx={{
          position: 'relative',
          my: 5,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center'
        }}
      >
        {/* Timeline line */}
        {!isLastStep && (
          <MotionBox
            animate={isInView ? "visible" : "hidden"}
            variants={timelineVariants}
            initial="hidden"
            sx={{
              position: 'absolute',
              top: '50%',
              right: isMobile ? (isEven ? 'auto' : '50%') : '50%',
              left: isMobile ? (isEven ? '50%' : 'auto') : 'auto',
              width: 2,
              height: isMobile ? 50 : 100,
              bgcolor: 'primary.main',
              zIndex: 1,
              transform: isMobile ? 'translateY(100%)' : 'translateY(0)',
              transformOrigin: 'top'
            }}
          />
        )}

        {/* Timeline dot/icon */}
        <MotionBox
          animate={isInView ? "pulse" : "hidden"}
          variants={iconVariants}
          initial="hidden"
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            bgcolor: step.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
            zIndex: 2,
            mx: isMobile ? 'auto' : 0
          }}
        >
          {step.icon}
        </MotionBox>

        {/* Content */}
        <MotionBox
          animate={isInView ? "visible" : "hidden"}
          variants={isEven ? fadeInLeft : fadeInRight}
          initial="hidden"
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: isMobile ? '100%' : '500px',
            mx: isMobile ? 'auto' : 0,
            mt: isMobile ? 3 : 0,
            ml: isMobile ? 0 : (contentPosition === 'right' ? 4 : 'auto'),
            mr: isMobile ? 0 : (contentPosition === 'left' ? 4 : 'auto'),
          }}
        >
          <MotionPaper
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)' 
            }}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: isInView ? alpha(step.iconBg, 0.1) : 'background.paper',
              border: isInView ? `1px solid ${step.iconBg}` : 'none',
              boxShadow: isInView ? 4 : 2,
              transition: 'all 0.3s ease'
            }}
          >
            <MotionTypography 
              variant="h5" 
              component="h3" 
              sx={{ 
                mb: 1, 
                color: step.iconBg,
                fontWeight: 'bold'
              }}
            >
              {step.title}
            </MotionTypography>
            
            <MotionTypography 
              variant="subtitle1" 
              sx={{ 
                mb: 2,
                fontWeight: '500',
                color: 'text.secondary'
              }}
            >
              {step.subtitle}
            </MotionTypography>
            
            <MotionDivider sx={{ my: 2 }} />
            
            <MotionTypography variant="body1" paragraph>
              {step.description}
            </MotionTypography>
            
            <Box component="ul" sx={{ pl: 2, mb: 0 }}>
              {step.benefits.map((benefit, i) => (
                <Box 
                  component="li" 
                  key={i}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: i < step.benefits.length - 1 ? 1 : 0 
                  }}
                >
                  <CheckCircleOutlineIcon 
                    color="secondary" 
                    fontSize="small" 
                    sx={{ mr: 1 }} 
                  />
                  <Typography variant="body2">
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionPaper>
        </MotionBox>
      </MotionBox>
    );
  };

  // Function to generate alpha color with opacity
  const alpha = (color, opacity) => {
    // Convert hex to rgba or just return with opacity
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    // For theme colors (primary.main etc), we can't easily convert
    // So we return a semi-transparent version of white or black
    return `rgba(255, 255, 255, ${opacity})`;
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Banner with Parallax Effect */}
      <MotionBox
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${placeholderImages.eventHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <MotionContainer
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{
            textAlign: 'center'
          }}
        >
          <MotionTypography 
            variants={fadeInUp}
            component="h1"
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
            }}
          >
            תהליך העבודה שלנו
          </MotionTypography>
          
          <MotionTypography 
            variants={fadeInUp}
            variant="h5" 
            sx={{ 
              mb: 6, 
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              maxWidth: 800,
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            מהחזון הראשוני ועד לחגיגה - כך אנו עובדים להפוך את האירוע שלכם למושלם
          </MotionTypography>
          
          <MotionBox 
            variants={fadeInUp}
            sx={{ mt: 8 }}
          >
            <Tooltip title="גלול למטה">
              <MotionIconButton
                onClick={scrollToTimeline}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [0, 10, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                }}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  },
                  width: 60,
                  height: 60
                }}
              >
                <ArrowDownwardIcon fontSize="large" />
              </MotionIconButton>
            </Tooltip>
          </MotionBox>

          {/* Step indicator dots - no auto switching, just show all steps */}
          <MotionBox 
            variants={fadeIn}
            sx={{ 
              position: 'absolute',
              bottom: 30,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 1
            }}
          >
            {steps.map((step, i) => (
              <MotionBox 
                key={i}
                initial={{ opacity: 0.6, backgroundColor: 'rgba(255,255,255,0.3)' }}
                animate={{ 
                  scale: activeStepIndices.includes(i) ? 1.2 : 1,
                  opacity: activeStepIndices.includes(i) ? 1 : 0.6,
                  backgroundColor: activeStepIndices.includes(i) ? step.iconBg : 'rgba(255,255,255,0.3)'
                }}
                transition={{ duration: 0.3 }}
                sx={{ 
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (stepRefs.current[i]) {
                    stepRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              />
            ))}
          </MotionBox>
        </MotionContainer>
      </MotionBox>

      {/* Timeline Section */}
      <Box 
        ref={timelineRef} 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'background.default',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          {/* Section Title */}
          <MotionBox
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            sx={{ textAlign: 'center', mb: 10 }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                color: 'primary.main'
              }}
            >
              מהחזון ועד לחגיגה
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 700,
                mx: 'auto',
                color: 'text.secondary',
                mb: 2
              }}
            >
              איך תהליך העבודה שלנו הופך את החלום שלכם למציאות בארבעה שלבים פשוטים
            </Typography>
            
            <Divider sx={{ width: 100, mx: 'auto', my: 3, borderWidth: 2, borderColor: 'secondary.main' }} />
          </MotionBox>

          {/* Timeline Indicator Line */}
          <MotionBox
            style={{ scaleY: timelineProgress }}
            sx={{
              position: 'absolute',
              left: { xs: 'calc(50% - 1px)', md: 'calc(50% - 1px)' },
              top: { xs: 200, md: 200 },
              width: 4,
              height: '70%',
              bgcolor: 'primary.main',
              transformOrigin: 'top',
              display: { xs: 'none', md: 'block' },
              zIndex: 1
            }}
          />

          {/* Timeline Steps */}
          <MotionBox sx={{ position: 'relative', zIndex: 2 }}>
            {steps.map((step, index) => (
              <TimelineStep 
                key={step.id} 
                step={step} 
                index={index} 
                isLastStep={index === steps.length - 1} 
              />
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 },
          bgcolor: 'primary.main',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: 'center' }}
          >
            <MotionTypography 
              variant="h3" 
              component="h2" 
              variants={fadeInUp}
              sx={{ 
                fontWeight: 'bold',
                mb: 3
              }}
            >
              מוכנים להתחיל?
            </MotionTypography>
            
            <MotionTypography 
              variant="h6" 
              variants={fadeInUp}
              sx={{ mb: 5 }}
            >
              צרו איתנו קשר היום ונתחיל לתכנן יחד את החלום שלכם
            </MotionTypography>
            
            <MotionBox 
              variants={fadeInUp}
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <MotionButton 
                component={RouterLink} 
                to="/contact" 
                variant="contained" 
                color="secondary" 
                size="large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontWeight: 'bold' 
                }}
              >
                לייעוץ חינם
              </MotionButton>
              
              <MotionButton 
                component="a" 
                href={contactData.socialMedia?.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined" 
                color="inherit" 
                size="large"
                startIcon={<WhatsAppIcon />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  borderColor: 'white',
                  '&:hover': { 
                    borderColor: 'white'
                  } 
                }}
              >
                וואטסאפ
              </MotionButton>
              
              <MotionButton 
                component="a" 
                href={`tel:${contactData.phone}`}
                variant="outlined" 
                color="inherit" 
                size="large"
                startIcon={<CallIcon />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  borderColor: 'white',
                  '&:hover': { 
                    borderColor: 'white'
                  } 
                }}
              >
                {contactData.phone}
              </MotionButton>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Back to top button */}
      <Tooltip title="חזרה למעלה">
        <MotionFab
          color="primary"
          size="medium"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            opacity: 0.7,
            '&:hover': {
              opacity: 1
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <KeyboardArrowUpIcon />
        </MotionFab>
      </Tooltip>
    </Box>
  );
};

export default HowItWorksPage; 