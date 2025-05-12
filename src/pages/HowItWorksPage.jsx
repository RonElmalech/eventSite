import React from 'react';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import { placeholderImages } from '../utils/placeholder';

const HowItWorksPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Our values
  const values = [
    {
      title: "יושרה",
      description: "הכול שקוף, בלי אותיות קטנות. אנחנו אומרים את האמת, גם כשזה פחות נוח – כי אתם סומכים עלינו.",
      icon: <VerifiedIcon />
    },
    {
      title: "אמינות",
      description: "אנחנו עומדים מאחורי כל התחייבות – אם משהו לא עומד בציפיות, נבדוק, נתקן, ונחזיר עד 20% מעלות השירות במקרה הצורך.",
      icon: <CheckIcon />
    },
    {
      title: "מחירים הוגנים",
      description: "לא תשלמו יותר בגלל חוסר ידע או חוסר ניסיון – אנחנו יודעים בדיוק כמה כל דבר צריך לעלות, ומוודאים שאתם מקבלים תמורה מלאה לכל שקל.",
      icon: <LocalOfferIcon />
    },
    {
      title: "איכות",
      description: "כל הספקים שלנו נבחרו בקפידה מתוך ניסיון אישי והמלצות מוכחות. אין פשרות על איכות – גם כשזה חוסך לכם כסף.",
      icon: <StarIcon />
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "יוצרים קשר בקלות",
      description: "ניתן לפנות אלינו דרך האתר, טלפון או וואטסאפ. אנחנו כאן כדי להקשיב, להבין מה אתם צריכים, ולהתחיל לבנות איתכם את האירוע – בלי לחץ, בשיחה בגובה העיניים.",
      icon: <PhoneInTalkIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.primary.main
    },
    {
      id: 2,
      title: "התאמה אישית של חבילה",
      description: "בין אם מדובר בברית, בר/בת מצווה, חינה, יום הולדת או אירוע עסקי – אנחנו מרכיבים עבורכם חבילה מותאמת אישית הכוללת את כל בעלי המקצוע שתצטרכו, לפי סגנון, תקציב ואופי האירוע.",
      icon: <PersonIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.secondary.main
    },
    {
      id: 3,
      title: "הצעת מחיר שקופה וסגירה",
      description: "לאחר התאמה אישית, תקבלו הצעת מחיר מסודרת ושקופה הכוללת את כל השירותים שנבחרו. אתם תדעו בדיוק מה מקבלים, ממי, ובכמה.",
      icon: <ReceiptIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.primary.dark
    },
    {
      id: 4,
      title: "ליווי מלא עד האירוע (ואחריו)",
      description: "אנחנו נשארים אתכם לכל אורך הדרך – מתיאומים מול הספקים, דרך מעקב אחרי ההכנות, ועד בדיקה אחרי האירוע. כי כשיש מישהו שמנהל בשבילכם את הכול – אתם יכולים באמת ליהנות.",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#fff' }} />,
      iconBg: theme.palette.secondary.dark
    }
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(57, 84, 204, 0.8), rgba(247, 143, 70, 0.8)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          py: 8,
        }}
      >
        <Container sx={{ textAlign: 'center' }}>
          <Typography 
            component="h1"
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            הקסם באירוע
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 5, 
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 650,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            כי כל אירוע קטן הוא רגע גדול
          </Typography>
          
          <Button 
            component={RouterLink} 
            to="/contact" 
            variant="contained" 
            size="large"
            sx={{ 
              py: 1.5, 
              px: 4, 
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.grey[100],
              }
            }}
          >
            בואו נתחיל את הקסם שלכם ✨
          </Button>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={12}>
              <Box 
                sx={{ 
                  position: 'relative',
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, #ffffff, #f6f6f6)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                }}
              >
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 200px' },
                  gridGap: { xs: '20px', md: '30px' }
                }}>
                  <Box 
                    sx={{ 
                      gridColumn: { xs: '1', md: '2' },
                      gridRow: { xs: '1', md: '1' },
                      justifySelf: 'flex-end',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                      alt="מייסד הקסם באירוע"
                      sx={{
                        width: { xs: 150, md: 180 },
                        height: { xs: 150, md: 180 },
                        border: '6px solid white',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                      }}
                    />
                  </Box>
                  
                  <Box 
                    sx={{ 
                      gridColumn: { xs: '1', md: '1' },
                      gridRow: { xs: '2', md: '1' },
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      component="h2" 
                      color="primary.main"
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 3,
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -10,
                          left: 0,
                          width: '40%',
                          height: 4,
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: 2,
                        }
                      }}
                    >
                      מי אנחנו
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        mb: 3, 
                        fontSize: '1.25rem', 
                        lineHeight: 1.7,
                        color: 'text.primary',
                        fontWeight: 500
                      }}
                    >
                      אני מתן, מייסד "הקסם באירוע". גדלתי בעולם האירועים – אמא שלי, נועה, מפיקת אירועים, והמשפחה שלי מנהלת את "נועה – הבית לאירועים" באשדוד, אולם אירועים עם אלפי לקוחות מרוצים. האירועים הם חלק ממני – מילדות ראיתי איך כל פרט קטן יכול להפוך ערב פשוט לזיכרון בלתי נשכח.
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        fontSize: '1.25rem', 
                        lineHeight: 1.7,
                        color: 'text.primary',
                        fontWeight: 500
                      }}
                    >
                      עם השנים הכרתי מאות ספקים, למדתי מה עובד באמת – ושמרתי קרוב אליי רק את הטובים והאמינים ביותר. אני כאן כדי להנגיש את כל הידע, הניסיון והקשרים שצברתי, ולעזור לכם להפיק את האירוע שלכם בקלות, בשקיפות, ובמחיר הוגן.
                    </Typography>
                    
                    <Button 
                      component={RouterLink} 
                      to="/contact" 
                      variant="contained" 
                      color="secondary"
                      size="large"
                      sx={{ 
                        mt: 2,
                        fontWeight: 'bold',
                        py: 1.2,
                        px: 4
                      }}
                    >
                      יצירת קשר עם המומחים שלנו
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            color="primary.main"
            sx={{ 
              fontWeight: 'bold', 
              mb: 3
            }}
          >
            הערכים שלנו
          </Typography>
          
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: 6,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            ערכים המנחים אותנו בכל אירוע ובכל החלטה
          </Typography>
          
          <Box 
            sx={{ 
              position: 'relative',
              my: 8,
              pb: 12,
              pt: 8,
              overflow: 'visible',
              '&::before': {
                content: 'none',
              }
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute',
                width: 180,
                height: 180,
                borderRadius: '50%',
                bgcolor: 'primary.light',
                opacity: 0.1,
                top: '5%',
                left: '5%',
                zIndex: 0,
              }} 
            />
            <Box 
              sx={{ 
                position: 'absolute',
                width: 150,
                height: 150,
                borderRadius: '50%',
                bgcolor: 'secondary.light',
                opacity: 0.1,
                bottom: '15%',
                right: '8%',
                zIndex: 0,
              }} 
            />
            <Box 
              sx={{ 
                position: 'absolute',
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'primary.light',
                opacity: 0.05,
                bottom: '5%',
                left: '25%',
                zIndex: 0,
              }} 
            />
            <Box 
              sx={{ 
                position: 'absolute',
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                opacity: 0.05,
                top: '30%',
                right: '20%',
                zIndex: 0,
              }} 
            />
            <Box 
              sx={{ 
                position: 'absolute',
                width: 60,
                height: 60,
                borderRadius: '50%',
                bgcolor: 'primary.dark',
                opacity: 0.06,
                bottom: '35%',
                left: '10%',
                zIndex: 0,
              }} 
            />
            {[...Array(20)].map((_, i) => (
              <Box
                key={`dot-${i}`}
                sx={{
                  position: 'absolute',
                  width: Math.random() * 5 + 2,
                  height: Math.random() * 5 + 2,
                  borderRadius: '50%',
                  bgcolor: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                  opacity: 0.1 + Math.random() * 0.15,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  zIndex: 0,
                }}
              />
            ))}
          
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'relative',
                gap: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, md: 4 },
                zIndex: 1,
              }}
            >
              {values.map((value, index) => {
                // Determine color pattern based on row position
                // First row: blue, orange (indices 0, 1)
                // Second row: orange, blue (indices 2, 3)
                // This creates the alternating pattern by row
                const isFirstRow = index < 2;
                const isFirstInRow = index % 2 === 0;
                
                // For first row: primary first, secondary second
                // For second row: secondary first, primary second
                const isPrimary = (isFirstRow && isFirstInRow) || (!isFirstRow && !isFirstInRow);
                
                return (
                  <Box 
                    key={index}
                    sx={{ 
                      position: 'relative',
                      width: { xs: '90%', sm: '46%', md: '46%' },
                      marginTop: { xs: 3, md: 5 },
                      marginBottom: { xs: 3, md: 5 },
                      transform: 'none',
                      animation: `float${index + 1} 8s ease-in-out infinite`,
                      '@keyframes float1': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' }
                      },
                      '@keyframes float2': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-8px)' }
                      },
                      '@keyframes float3': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-12px)' }
                      },
                      '@keyframes float4': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' }
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: isPrimary
                          ? `radial-gradient(circle, ${theme.palette.primary.light} 0%, rgba(255,255,255,0) 70%)`
                          : `radial-gradient(circle, ${theme.palette.secondary.light} 0%, rgba(255,255,255,0) 70%)`,
                        opacity: 0.5,
                        top: '-10%',
                        right: isPrimary ? '10%' : 'auto',
                        left: isPrimary ? 'auto' : '10%',
                        zIndex: 1,
                      }}
                    />
                    
                    <Box
                      sx={{
                        width: '100%',
                        height: 0,
                        paddingBottom: '100%',
                        borderRadius: '50%',
                        background: isPrimary
                          ? `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 90%)`
                          : `radial-gradient(circle at 30% 30%, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 90%)`,
                        position: 'relative',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        transition: 'all 0.4s ease',
                        border: '8px solid',
                        borderColor: 'rgba(255,255,255,0.15)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '8%',
                          left: '8%',
                          width: '25%',
                          height: '25%',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.15)',
                          zIndex: 0,
                        },
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.03)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          borderColor: 'rgba(255,255,255,0.25)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: { xs: 3, sm: 4, md: 4 },
                          color: 'white',
                          textAlign: 'center',
                          overflow: 'hidden',
                          borderRadius: '50%',
                        }}
                      >
                        <Box sx={{ position: 'relative', mb: 1 }}>
                          <Avatar
                            sx={{ 
                              bgcolor: 'rgba(255, 255, 255, 0.9)', 
                              color: isPrimary ? 'primary.dark' : 'secondary.dark',
                              width: { xs: 60, sm: 75, md: 90 },
                              height: { xs: 60, sm: 75, md: 90 },
                              mb: { xs: 1.5, md: 2.5 },
                              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                              border: '4px solid',
                              borderColor: 'rgba(255,255,255,0.8)',
                              transform: 'rotate(-5deg)',
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'rotate(0deg) scale(1.1)'
                              }
                            }}
                          >
                            {React.cloneElement(value.icon, { fontSize: 'large', style: { fontSize: '2rem' } })}
                          </Avatar>
                          
                          <Box 
                            sx={{ 
                              position: 'absolute',
                              width: 12,
                              height: 5,
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,0.8)',
                              top: '20%',
                              left: '20%',
                              transform: 'rotate(30deg)',
                            }} 
                          />
                        </Box>
                        
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 1.5, 
                            fontWeight: 'bold',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            lineHeight: 1.2,
                            maxWidth: '85%',
                          }}
                        >
                          {value.title}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                            lineHeight: 1.5,
                            opacity: 0.95,
                            display: '-webkit-box',
                            WebkitLineClamp: { xs: 3, sm: 4, md: 5 },
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '90%',
                          }}
                        >
                          {value.description.length > 100
                            ? `${value.description.substring(0, 100)}...` 
                            : value.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ 
        py: { xs: 8, md: 10 }, 
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 30%, rgba(57, 84, 204, 0.03) 0%, rgba(57, 84, 204, 0) 50%), radial-gradient(circle at 80% 70%, rgba(247, 143, 70, 0.03) 0%, rgba(247, 143, 70, 0) 50%)',
          zIndex: 0,
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              color="primary.main"
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.2rem' }
              }}
            >
              איך זה עובד?
            </Typography>
            
            <Divider sx={{ 
              width: 120, 
              mx: 'auto', 
              my: 3, 
              borderWidth: 3, 
              borderColor: 'secondary.main',
              borderRadius: 2
            }} />
            
            <Typography 
              variant="h6" 
              align="center" 
              color="text.secondary"
              sx={{ 
                mb: 6,
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 500
              }}
            >
              תהליך פשוט וברור בדרך לאירוע מושלם
            </Typography>
            
            <Box sx={{ 
              mt: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: '50%', md: 89 },
                width: 4,
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                transform: { xs: 'translateX(-50%)', md: 'none' },
                display: { xs: 'none', md: 'block' },
                zIndex: 0,
                opacity: 0.3,
                borderRadius: 4,
              }
            }}>
              {steps.map((step, index) => (
                <Paper
                  key={step.id}
                  elevation={4}
                  sx={{
                    p: { xs: 3, md: 4 },
                    mb: 5,
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 8,
                      height: '100%',
                      backgroundColor: step.iconBg
                    },
                    background: index % 2 === 0 
                      ? 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,245,255,1) 100%)'
                      : 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,245,240,1) 100%)',
                    zIndex: 1
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      mr: { xs: 0, md: 4 },
                      mb: { xs: 3, md: 0 },
                      minWidth: { xs: 'auto', md: 120 }
                    }}
                  >
                    <Box
                      sx={{
                        width: 85,
                        height: 85,
                        borderRadius: '50%',
                        backgroundColor: step.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        position: 'relative',
                        zIndex: 1,
                        border: '5px solid',
                        borderColor: 'rgba(255,255,255,0.7)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(5deg) scale(1.05)'
                        }
                      }}
                    >
                      {React.cloneElement(step.icon, { sx: { fontSize: 45 } })}
                      <Typography
                        variant="h5"
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: -10,
                          width: 35,
                          height: 35,
                          borderRadius: '50%',
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                          border: '2px solid white'
                        }}
                      >
                        {step.id}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: step.iconBg,
                        mb: 2
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: '1.1rem', 
                        lineHeight: 1.7,
                        color: 'text.primary'
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 }, 
          bgcolor: theme.palette.grey[50],
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            color="primary.main"
            sx={{ 
              fontWeight: 'bold', 
              mb: 2
            }}
          >
            למה דווקא אנחנו?
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mt: 3, lineHeight: 1.7 }}>
              כי בנינו שירות חדשני ומהפכני שמביא את היתרונות של הפקה מקצועית, אבל בלי העלות הגבוהה של מפיק פרטי.
              אנחנו עושים את זה קל יותר, מהיר יותר, בטוח יותר – וחוסכים לכם זמן, כסף ודאגות.
            </Typography>
          </Box>
          
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              borderTop: '4px solid',
              borderColor: 'secondary.main'
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontStyle: 'italic', 
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: theme.palette.text.primary,
                lineHeight: 1.6
              }}
            >
              אצלנו יש לא רק מקצוענים, אלא גם "אמא ואבא לאירוע" – שמלווים אתכם יד ביד.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Call To Action */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 8 }, 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              mb: 4
            }}
          >
            בואו נתחיל את הקסם שלכם ✨
          </Typography>
          
          <Button 
            component={RouterLink} 
            to="/contact" 
            variant="contained" 
            size="large"
            sx={{ 
              py: 1.5, 
              px: 6, 
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              }
            }}
          >
            צרו קשר
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HowItWorksPage; 