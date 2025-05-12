import { useState, useEffect } from 'react';
import { 
  Snackbar, 
  Button, 
  Box, 
  Typography,
  Link,
  Paper,
  IconButton
} from '@mui/material';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import CloseIcon from '@mui/icons-material/Close';

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Always show on refresh, we're not actually using cookies yet
    setOpen(true);
  }, []);

  const handleAccept = () => {
    // Just close the toast for this session without storing any preference
    setOpen(false);
  };

  const handleDecline = () => {
    // Just close the toast for this session without storing any preference
    setOpen(false);
  };

  const handleClose = () => {
    // Just close the toast
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ 
        width: { xs: '90%', sm: '500px', md: '550px' },
        maxWidth: '100%',
        bottom: { xs: 20, sm: 24 },
      }}
    >
      <Paper
        elevation={12}
        sx={{
          backgroundImage: 'linear-gradient(145deg, #f9f9f9 0%, #ffffff 100%)',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(57, 84, 204, 0.1)',
          boxShadow: '0 10px 30px rgba(57, 84, 204, 0.15), 0 1px 8px rgba(57, 84, 204, 0.1)',
        }}
      >
        {/* Decorative element - subtle gradient border */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '6px',
            backgroundImage: 'linear-gradient(to right, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
          }}
        />

        {/* Close button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#666666',
            opacity: 0.7,
            zIndex: 2,
            '&:hover': {
              opacity: 1,
              backgroundColor: 'rgba(57, 84, 204, 0.08)'
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', p: 2.5, pt: 3.5, pb: 2.5 }}>
          {/* Cookie icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'rgba(57, 84, 204, 0.12)',
              mr: 2,
              flexShrink: 0,
            }}
          >
            <CookieOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: '#3954CC',
              }} 
            />
          </Box>

          {/* Content */}
          <Box 
            component="div" 
            dir="rtl"
            sx={{ 
              flexGrow: 1
            }}
          >
            <Typography 
              variant="h6"
              component="h3"
              sx={{ 
                fontWeight: 600, 
                color: '#333333',
                fontSize: '1rem',
                lineHeight: 1.3,
                mb: 0.5
              }}
            >
              עוגיות באתר
            </Typography>

            <Typography 
              variant="body2"
              sx={{ 
                color: '#555555',
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: '0.875rem',
                fontStyle: 'normal',
              }}
            >
              🍪 האתר הזה משתמש בעוגיות (Cookies) – לא בשביל קינוחים באירוע, אלא כדי לשפר לך את הגלישה. כי גם באתר מגיע לך שירות חלק, בלי תקלות ובלי דרמות. 🍪
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box 
          dir="rtl" 
          sx={{ p: 2.5, pt: 0, pb: 2.5, display: 'flex', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: 1.5 }}
        >
          <Button 
            disableElevation
            variant="contained" 
            color="secondary"
            onClick={handleAccept}
            sx={{ 
              py: 1,
              px: { xs: 3, sm: 4 },
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 1.5,
              transition: 'all 0.2s ease',
              flexShrink: 0,
              order: { xs: 1, sm: 2 },
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(247, 143, 70, 0.3)',
              }
            }}
          >
            אישור העוגיות
          </Button>

          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              width: { xs: '100%', sm: 'auto' },
              flexGrow: 1,
              order: { xs: 2, sm: 1 },
            }}
          >
            <Button 
              variant="text" 
              color="inherit"
              onClick={handleDecline}
              size="small"
              sx={{ 
                fontWeight: 500,
                fontSize: '0.85rem',
                color: '#444444',
                '&:hover': {
                  backgroundColor: 'rgba(57, 84, 204, 0.05)',
                  color: '#3954CC',
                }
              }}
            >
              לא, תודה
            </Button>

            <Link 
              href="/privacy" 
              underline="hover"
              sx={{ 
                color: '#444444',
                fontWeight: 500,
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#3954CC',
                }
              }}
            >
              מדיניות פרטיות
            </Link>
          </Box>
        </Box>
      </Paper>
    </Snackbar>
  );
};

export default CookieConsent; 