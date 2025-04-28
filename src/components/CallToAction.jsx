import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Grid, 
  useTheme,
  useMediaQuery,
  Divider,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { motion } from 'framer-motion';
import { contactData } from '../data/cmsData';

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionGrid = motion(Grid);

const CallToAction = ({ 
  variant = 'primary', 
  title = 'בואו ניצור יחד את האירוע המושלם שלכם',
  subtitle = 'ייעוץ ראשוני חינם, ללא התחייבות',
  buttonText = 'שיחת ייעוץ חינם',
  showWhatsApp = true,
  showPhone = false,
  background = null,
  spacing = { py: 6 }
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutlined = variant === 'outlined';
  
  // Set a darker background color overlay
  const darkOverlay = 'rgba(0,0,0,0.5)'; // Semi-transparent black overlay
  
  // Use the specified background or fall back to the default with darker overlay
  const bgColor = background || (isPrimary 
    ? theme.palette.primary.dark  // Use darker variant of primary
    : isSecondary 
      ? theme.palette.secondary.dark  // Use darker variant of secondary
      : 'transparent');
      
  // Set text color with high contrast
  const textColor = isPrimary || isSecondary ? '#fff' : 'text.primary';
  
  // Calculate contrasting colors for elements
  const highlightBgColor = isPrimary 
    ? theme.palette.secondary.main 
    : isSecondary 
      ? theme.palette.primary.main 
      : theme.palette.primary.main;
  
  const panelBgColor = isPrimary || isSecondary
    ? alpha('#000', 0.3)  // Dark overlay on colored backgrounds for better contrast
    : alpha(theme.palette.primary.main, 0.05); // Subtle primary color overlay on light backgrounds

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <Box 
      sx={{ 
        ...spacing,
        bgcolor: bgColor,
        color: textColor,
        borderTop: isOutlined ? `1px solid ${theme.palette.divider}` : 'none',
        borderBottom: isOutlined ? `1px solid ${theme.palette.divider}` : 'none',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 10 }
      }}
    >
      {/* Dark overlay for better contrast */}
      {(isPrimary || isSecondary) && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.3)', // Translucent dark overlay
            zIndex: 1
          }}
        />
      )}

      {/* Decorative elements */}
      {(isPrimary || isSecondary) && (
        <>
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: isSecondary ? theme.palette.primary.main : theme.palette.secondary.main,
              filter: 'blur(40px)',
              zIndex: 1
            }}
          />
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: isSecondary ? theme.palette.primary.main : theme.palette.secondary.main,
              filter: 'blur(40px)',
              zIndex: 1
            }}
          />
          {/* Decorative circles */}
          {[...Array(6)].map((_, i) => (
            <Box
              key={`circle-${i}`}
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              sx={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: 20 + (i * 10),
                height: 20 + (i * 10),
                borderRadius: '50%',
                border: '1px solid',
                borderColor: '#fff',
                zIndex: 1
              }}
            />
          ))}
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <MotionPaper 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 15 
          }}
          elevation={isOutlined ? 0 : 8}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            textAlign: 'center',
            background: isOutlined 
              ? theme.palette.background.paper 
              : isPrimary || isSecondary
                ? darkOverlay // Use dark overlay
                : theme.palette.background.paper,
            border: isOutlined ? `1px solid ${theme.palette.divider}` : 'none',
            boxShadow: isPrimary || isSecondary ? '0 15px 50px rgba(0,0,0,0.25)' : undefined,
            backgroundImage: isPrimary || isSecondary ? 
              `linear-gradient(to bottom, ${alpha('#000', 0.2)}, ${alpha('#000', 0.4)})` : 
              undefined,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative icon in background */}
          <CelebrationIcon 
            sx={{ 
              position: 'absolute', 
              top: 20, 
              right: 20, 
              fontSize: 80,
              opacity: 0.07,
              transform: 'rotate(15deg)',
              color: isPrimary || isSecondary ? textColor : theme.palette.primary.main
            }} 
          />
          
          <MotionGrid 
            container 
            spacing={4} 
            alignItems="center"
            justifyContent="center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid item xs={12} md={7}>
              <MotionTypography 
                variant="h3" 
                component="h2" 
                variants={itemVariants}
                sx={{ 
                  fontWeight: 'bold',
                  color: isOutlined ? 'primary.main' : textColor,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 1,
                  textShadow: isPrimary || isSecondary ? '0 2px 6px rgba(0,0,0,0.5)' : 'none',
                  letterSpacing: '0.5px'
                }}
              >
                {title}
              </MotionTypography>
              
              <MotionTypography 
                variant="h6" 
                variants={itemVariants}
                sx={{ 
                  mb: 4, 
                  maxWidth: 800, 
                  mx: 'auto',
                  color: isOutlined ? 'text.primary' : textColor,
                  opacity: 1, // Full opacity for better contrast
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  textShadow: isPrimary || isSecondary ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
                  fontWeight: isPrimary || isSecondary ? 500 : 400 // Slightly bolder text for better contrast
                }}
              >
                {subtitle}
              </MotionTypography>
              
              <MotionBox 
                variants={itemVariants}
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center',
                  gap: 2,
                  mb: 4
                }}
              >
                <MotionButton 
                  component={RouterLink} 
                  to="/contact" 
                  variant="contained" 
                  color={isPrimary ? "secondary" : "primary"}
                  size="large"
                  startIcon={<ContactPhoneIcon />}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                  }}
                >
                  {buttonText}
                </MotionButton>
                
                {showWhatsApp && (
                  <MotionButton 
                    component="a" 
                    href={contactData.socialMedia.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isOutlined ? "contained" : "outlined"} 
                    color={isOutlined ? "secondary" : "inherit"}
                    size="large"
                    startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{ 
                      px: 3, 
                      py: 1.5,
                      borderColor: isPrimary || isSecondary ? '#fff' : theme.palette.primary.main,
                      borderWidth: 2, // Thicker border for better visibility
                      color: isPrimary || isSecondary ? '#fff' : theme.palette.primary.main,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      '&:hover': { 
                        backgroundColor: isPrimary || isSecondary 
                          ? 'rgba(255,255,255,0.15)' 
                          : alpha(theme.palette.primary.main, 0.05),
                        borderColor: isPrimary || isSecondary ? '#fff' : theme.palette.primary.main
                      }
                    }}
                  >
                    ווטסאפ מהיר
                  </MotionButton>
                )}
              </MotionBox>
              
              {showPhone && (
                <MotionBox variants={itemVariants}>
                  <Divider sx={{ 
                    my: 3, 
                    width: '60%', 
                    mx: 'auto', 
                    opacity: 0.4,
                    '&:before, &:after': { 
                      borderTop: isPrimary || isSecondary
                        ? `1px solid ${textColor}` 
                        : `1px solid ${theme.palette.divider}`
                    }
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        px: 2, 
                        opacity: 0.9,
                        color: isPrimary || isSecondary ? textColor : 'text.secondary'
                      }}
                    >
                      או
                    </Typography>
                  </Divider>
                  
                  <MotionButton 
                    component="a" 
                    href={`tel:${contactData.phone}`}
                    variant="text"
                    startIcon={
                      <ContactPhoneIcon sx={{ 
                        color: isPrimary || isSecondary
                          ? '#fff'
                          : theme.palette.primary.main,
                        fontSize: 24
                      }} />
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{ 
                      color: isPrimary || isSecondary ? '#fff' : theme.palette.primary.main, 
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      bgcolor: isPrimary || isSecondary 
                        ? alpha('#000', 0.25) // Darker background for better contrast
                        : alpha(theme.palette.primary.main, 0.05),
                      px: 3,
                      py: 1.2,
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: isPrimary || isSecondary 
                          ? alpha('#000', 0.35) 
                          : alpha(theme.palette.primary.main, 0.1),
                      }
                    }}
                  >
                    {contactData.phone}
                  </MotionButton>
                </MotionBox>
              )}
            </Grid>
            
            {!isMobile && (
              <Grid item xs={12} md={5}>
                <MotionBox
                  variants={itemVariants}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'flex-start',
                    bgcolor: panelBgColor,
                    p: 3,
                    borderRadius: 3,
                    border: isPrimary || isSecondary 
                      ? `1px solid ${alpha('#fff', 0.3)}` 
                      : `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component={motion.div}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      sx={{
                        bgcolor: highlightBgColor,
                        color: '#fff',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      <EventAvailableIcon />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        color: isPrimary || isSecondary ? '#fff' : 'text.primary',
                        textShadow: isPrimary || isSecondary ? '0 1px 3px rgba(0,0,0,0.3)' : 'none'
                      }}
                    >
                      אירוע מושלם, חווית אירוח בלתי נשכחת
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      textAlign: 'right', 
                      opacity: 1, // Full opacity for better contrast
                      color: isPrimary || isSecondary ? '#fff' : 'text.primary',
                      textShadow: isPrimary || isSecondary ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                      fontSize: '1rem'
                    }}
                  >
                    פנו אלינו לתיאום פגישת ייעוץ בה נבין את הצרכים והחלומות שלכם, ונבנה יחד את האירוע המושלם.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', width: '100%', mt: 1, gap: 2 }}>
                    <Box sx={{ 
                      flex: 1, 
                      p: 2, 
                      bgcolor: isPrimary || isSecondary 
                        ? alpha('#000', 0.25) // Darker for better contrast
                        : alpha(theme.palette.primary.main, 0.03),
                      border: isPrimary || isSecondary 
                        ? `1px solid ${alpha('#fff', 0.2)}` 
                        : `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      borderRadius: 2, 
                      textAlign: 'center' 
                    }}>
                      <EmojiEmotionsIcon sx={{ 
                        fontSize: 30, 
                        mb: 1, 
                        color: isPrimary || isSecondary 
                          ? '#fff'
                          : theme.palette.primary.main
                      }} />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: isPrimary || isSecondary ? '#fff' : 'text.primary',
                          textShadow: isPrimary || isSecondary ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                        }}
                      >
                        שירות אישי
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      flex: 1, 
                      p: 2, 
                      bgcolor: isPrimary || isSecondary 
                        ? alpha('#000', 0.25) // Darker for better contrast
                        : alpha(theme.palette.primary.main, 0.03),
                      border: isPrimary || isSecondary 
                        ? `1px solid ${alpha('#fff', 0.2)}` 
                        : `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      borderRadius: 2, 
                      textAlign: 'center' 
                    }}>
                      <CelebrationIcon sx={{ 
                        fontSize: 30, 
                        mb: 1, 
                        color: isPrimary || isSecondary 
                          ? '#fff'
                          : theme.palette.primary.main
                      }} />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: isPrimary || isSecondary ? '#fff' : 'text.primary',
                          textShadow: isPrimary || isSecondary ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                        }}
                      >
                        חוויה מושלמת
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>
            )}
          </MotionGrid>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default CallToAction; 