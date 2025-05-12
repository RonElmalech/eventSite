import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '85vh',
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
            maxWidth: 700,
            width: '100%',
            background: 'linear-gradient(145deg, #ffffff 0%, #f9f9f9 100%)',
            border: '1px solid rgba(57, 84, 204, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative top border */}
          <Box 
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: '8px',
              backgroundImage: 'linear-gradient(to right, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
            }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 700,
                fontSize: { xs: '4rem', md: '5.5rem' },
                display: 'flex',
                alignItems: 'center',
                gap: 1.5
              }}
            >
              4<SentimentDissatisfiedIcon sx={{ fontSize: { xs: '3.5rem', md: '5rem' } }} />4
            </Typography>
          </Box>
          
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ 
              color: 'secondary.main', 
              fontWeight: 600,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.8,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            אופס, הדף הזה לא נמצא – אבל אל תדאג, אנחנו כבר מחזירים אותך אל הקסם! 
            <AutoAwesomeIcon sx={{ color: '#F78F46', fontSize: { xs: '1.5rem', md: '2rem' } }} />
          </Typography>
          
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ 
              mb: 3.5,
              textAlign: 'center',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: '90%',
              mx: 'auto'
            }}
          >
            הדף שחיפשת פשוט נעלם לאירוע אחר. אולי הוא יצא לחפש את התקליטן או את השף שיביא את הקינוחים? אל תדאג, אנחנו כאן בשביל להביא את הקסם חזרה!
          </Typography>
          
          <Typography
            variant="body1"
            paragraph
            color="text.primary"
            sx={{ 
              fontWeight: 500,
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.2rem' }
            }}
          >
            נסה לחזור לדף הבית או תן לנו ללוות אותך לאן שאתה צריך.
          </Typography>
          
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/"
            size="large"
            startIcon={<AutoAwesomeIcon />}
            sx={{
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              py: 1.5,
              px: 5,
              borderRadius: 2,
              fontWeight: 600,
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 15px rgba(247, 143, 70, 0.3)',
              }
            }}
          >
            חזור לדף הבית
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotFoundPage; 