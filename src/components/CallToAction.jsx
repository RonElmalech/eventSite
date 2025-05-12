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
import { contactData } from '../data/cmsData';

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
  
  const darkOverlay = 'rgba(0,0,0,0.5)';
  
  const bgColor = background || (isPrimary 
    ? theme.palette.primary.dark
    : isSecondary 
      ? theme.palette.secondary.dark
      : 'transparent');
      
  const textColor = isPrimary || isSecondary ? '#fff' : 'text.primary';
  
  const highlightBgColor = isPrimary 
    ? theme.palette.secondary.main 
    : isSecondary 
      ? theme.palette.primary.main 
      : theme.palette.primary.main;
  
  const panelBgColor = isPrimary || isSecondary
    ? alpha('#000', 0.3)
    : alpha(theme.palette.primary.main, 0.05);
  
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
      {(isPrimary || isSecondary) && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.3)',
            zIndex: 1
          }}
        />
      )}

      {(isPrimary || isSecondary) && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: isSecondary ? theme.palette.primary.main : theme.palette.secondary.main,
              opacity: 0.15,
              zIndex: 1
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: isSecondary ? theme.palette.primary.main : theme.palette.secondary.main,
              opacity: 0.15,
              zIndex: 1
            }}
          />
          {[...Array(6)].map((_, i) => (
            <Box
              key={`circle-${i}`}
              sx={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: 20 + (i * 10),
                height: 20 + (i * 10),
                borderRadius: '50%',
                border: '1px solid',
                borderColor: '#fff',
                opacity: 0.15,
                zIndex: 1
              }}
            />
          ))}
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Paper 
          elevation={isOutlined ? 0 : 8}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            textAlign: 'center',
            background: isOutlined 
              ? theme.palette.background.paper 
              : isPrimary || isSecondary
                ? darkOverlay
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
          <CelebrationIcon 
            sx={{ 
              position: 'absolute', 
              top: 20, 
              right: 20, 
              fontSize: 80,
              opacity: 0.07,
              color: isPrimary || isSecondary ? textColor : theme.palette.primary.main
            }} 
          />
          
          <Grid 
            container 
            spacing={4} 
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h3" 
                component="h2" 
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
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: isOutlined ? 'text.secondary' : textColor,
                  mb: 3,
                  opacity: 0.9
                }}
              >
                {subtitle}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color={isPrimary ? 'secondary' : 'primary'}
                  size="large"
                  startIcon={<EventAvailableIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    boxShadow: 4
                  }}
                >
                  {buttonText}
                </Button>
                {showWhatsApp && (
                  <Button
                    component="a"
                    href={contactData.socialMedia.whatsapp}
                    variant="outlined"
                    color="inherit"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      borderWidth: 2
                    }}
                  >
                    WhatsApp
                  </Button>
                )}
                {showPhone && (
                  <Button
                    component="a"
                    href={`tel:${contactData.phone}`}
                    variant="outlined"
                    color="inherit"
                    size="large"
                    startIcon={<ContactPhoneIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      borderWidth: 2
                    }}
                  >
                    {contactData.phone}
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box 
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  bgcolor: panelBgColor
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    color: isOutlined ? 'primary.main' : textColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <EmojiEmotionsIcon color={isOutlined ? 'primary' : 'inherit'} />
                  למה לבחור בנו?
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {[
                    'ייעוץ אישי ומקצועי',
                    'חבילות מותאמות אישית',
                    'מחירים הוגנים',
                    'ליווי צמוד לאורך כל הדרך'
                  ].map((item, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1.5,
                        color: isOutlined ? 'text.primary' : textColor
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: highlightBgColor
                        }} 
                      />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default CallToAction; 