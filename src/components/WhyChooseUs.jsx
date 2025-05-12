import React from 'react';
import { 
  Box, 
  Container, 
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TimerIcon from '@mui/icons-material/Timer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8 }, 
        backgroundColor: theme.palette.grey[50],
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              color: 'primary.main',
              fontWeight: 'bold', 
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            למה לבחור בנו?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary', 
              mb: 3 
            }}
          >
            אנחנו דואגים לכל הפרטים עבורכם, כדי שהאירוע שלכם יהיה חופשי מלחץ ומושלם בכל היבט
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem', 
              fontWeight: 'medium', 
              color: 'secondary.main', 
              mb: 4 
            }}
          >
            אנחנו מאמינים שכל אירוע צריך להיות ייחודי ומותאם אישית
          </Typography>
        </Box>

        <div style={{ 
          width: '100%', 
          position: 'relative' 
        }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '15px' }}>
            <tbody>
              <tr>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[0]} />
                </td>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[1]} />
                </td>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[2]} />
                </td>
              </tr>
              <tr>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[3]} />
                </td>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[4]} />
                </td>
                <td style={{ width: '33.33%', padding: '10px', verticalAlign: 'top' }}>
                  <StaticBenefitCard benefit={benefits[5]} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Box>
  );
};

// A simple static card component to replace Material-UI components
const StaticBenefitCard = ({ benefit }) => {
  return (
    <div style={{ 
      padding: '24px', 
      height: '230px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 3px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '16px' }}>
        {benefit.icon}
      </div>
      
      <h3 style={{ 
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginBottom: '12px',
        color: '#1976d2'
      }}>
        {benefit.title}
      </h3>
      
      <p style={{ 
        color: '#666',
        fontSize: '0.875rem'
      }}>
        {benefit.description}
      </p>
    </div>
  );
};

export default WhyChooseUs; 