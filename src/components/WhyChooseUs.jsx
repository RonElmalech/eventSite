import React, { useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme,
  Button,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PeopleIcon from '@mui/icons-material/People';
import SpaIcon from '@mui/icons-material/Spa';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const WhyChooseUs = () => {
  const theme = useTheme();

  const benefits = [
    {
      icon: <PeopleIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "שירות אישי מותאם לצרכים שלכם",
      description: "אנחנו מקשיבים לכם ויוצרים את האירוע המושלם בהתאם לחלומות שלכם"
    },
    {
      icon: <TimerIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "חוסכים לכם זמן וכאב ראש",
      description: "אנחנו מטפלים בכל הפרטים כדי שאתם תוכלו להתרכז בדברים החשובים באמת"
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "חוסכים לכם כסף",
      description: "בזכות הקשרים האישיים שלנו עם הספקים, אנחנו משיגים עבורכם את המחירים הטובים ביותר"
    },
    {
      icon: <StarIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "רק ספקים מהשורה הראשונה",
      description: "אנחנו עובדים רק עם הספקים הטובים והמנוסים ביותר בתחומם"
    },
    {
      icon: <SpaIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "אירוע נטול לחץ",
      description: "אנחנו מטפלים בכל הבעיות, כך שתוכלו ליהנות מחווית אירוע רגועה ושמחה"
    },
    {
      icon: <ThumbUpAltIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: "ערבות לאיכות מעולה",
      description: "אנחנו מתחייבים לרמת שירות גבוהה ולתוצאות שיעלו על כל הציפיות שלכם"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      x: (index) => index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14
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
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Create main section InView reference
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Create controls for section title
  const titleControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      titleControls.start("visible");
    }
  }, [sectionInView, titleControls]);

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
      py: { xs: 8, md: 12 }, 
      background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.background.paper} 100%)`,
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <MotionBox
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, transparent 70%)`,
          top: '-100px',
          left: '-100px',
          zIndex: 0
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <MotionBox
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, transparent 70%)`,
          bottom: '-150px',
          right: '-150px',
          zIndex: 0
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox 
          sx={{ textAlign: 'center', mb: 8 }}
          initial={{ opacity: 0, y: -50 }}
          animate={titleControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
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
            initial={{ opacity: 0, y: -20 }}
            animate={titleControls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
            }}
          >
            למה לבחור בנו?
          </MotionTypography>
          
          <MotionTypography 
            variant="h6" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary', 
              mb: 3 
            }}
            initial={{ opacity: 0 }}
            animate={titleControls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
            }}
          >
            אנחנו דואגים לכל הפרטים עבורכם, כדי שהאירוע שלכם יהיה חופשי מלחץ ומושלם בכל היבט
          </MotionTypography>
          
          <MotionTypography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem', 
              fontWeight: 'medium', 
              color: 'secondary.main', 
              mb: 4 
            }}
            initial={{ opacity: 0 }}
            animate={titleControls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.7 } }
            }}
          >
            ככה אנחנו מבטיחים לכם אירוע מדהים שיעלה על כל הציפיות!
          </MotionTypography>
        </MotionBox>

        {/* Timeline style benefits */}
        <MotionBox
          sx={{ 
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: '10%', sm: '50%' },
              transform: { xs: 'translateX(-50%)', sm: 'translateX(-50%)' },
              width: '4px',
              background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
              zIndex: 0
            }
          }}
        >
          {benefits.map((benefit, index) => {
            // Create individual intersection observer for each benefit
            const [itemRef, itemInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: "-50px 0px"
            });
            
            return (
              <MotionBox
                key={index}
                ref={itemRef}
                initial="hidden"
                animate={itemInView ? "visible" : "hidden"}
                variants={timelineItemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: 'space-between',
                  mb: 6,
                  position: 'relative',
                  padding: 2,
                  pr: index % 2 === 0 ? { xs: 2, sm: 0 } : { xs: 2, sm: 4 },
                  pl: index % 2 === 0 ? { xs: 2, sm: 4 } : { xs: 2, sm: 0 },
                  ml: { xs: '20%', sm: 0 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: { xs: '15px', sm: '20px' },
                    height: { xs: '15px', sm: '20px' },
                    borderRadius: '50%',
                    backgroundColor: theme.palette.background.paper,
                    border: `3px solid ${theme.palette.secondary.main}`,
                    left: { xs: '-15%', sm: 'calc(50% - 10px)' },
                    transform: { sm: 'translateX(-50%)' },
                    top: { xs: '10px', sm: '50%' },
                    marginTop: { sm: '-10px' },
                    zIndex: 1
                  }
                }}
              >
                <MotionBox
                  sx={{
                    width: { xs: '100%', sm: '46%' },
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'background.paper',
                      top: { xs: '-10px', sm: '50%' },
                      right: { xs: 'auto', sm: index % 2 === 0 ? '-10px' : 'auto' },
                      left: { xs: '20px', sm: index % 2 === 0 ? 'auto' : '-10px' },
                      transform: { xs: 'rotate(45deg)', sm: 'translateY(-50%) rotate(45deg)' },
                      display: { xs: 'none', sm: 'block' }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MotionBox
                      variants={iconVariants}
                      whileHover="hover"
                      sx={{ mr: 2 }}
                    >
                      {benefit.icon}
                    </MotionBox>
                    
                    <Typography variant="h6" component="h3" fontWeight="bold">
                      {benefit.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </MotionBox>
                
                {/* This Box is empty and just takes up space for the layout */}
                <Box sx={{ width: { xs: '0%', sm: '46%' } }} />
              </MotionBox>
            );
          })}
        </MotionBox>

        <MotionBox 
          sx={{ 
            textAlign: 'center', 
            mt: 8,
            py: 4,
            px: 3,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.light}22, ${theme.palette.secondary.light}33)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.divider}`
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MotionTypography 
            variant="h4" 
            gutterBottom 
            fontWeight="bold" 
            color="primary.dark"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            אנחנו מטפלים בכל הפרטים עבורכם
          </MotionTypography>
          
          <MotionTypography 
            variant="body1" 
            paragraph 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              mb: 3,
              fontSize: '1.1rem'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            מהרגע שאתם פונים אלינו ועד לסיום האירוע, אנחנו לוקחים על עצמנו את כל המשימות והלחץ
          </MotionTypography>
          
          <MotionButton 
            component={RouterLink} 
            to="/contact" 
            variant="contained" 
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
              boxShadow: 4
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: 6,
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            בואו נארגן לכם אירוע חלומי
          </MotionButton>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 