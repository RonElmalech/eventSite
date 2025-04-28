import { useState, useEffect } from 'react';
import { Box, Fab, Tooltip, Zoom, Popover, Button, Typography, IconButton, Divider, Switch, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Slider, Grid, Select, MenuItem, Badge, Tabs, Tab, Menu } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import CallIcon from '@mui/icons-material/Call';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReplayIcon from '@mui/icons-material/Replay';
import AnimationIcon from '@mui/icons-material/Animation';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SpeedIcon from '@mui/icons-material/Speed';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MicIcon from '@mui/icons-material/Mic';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import { contactData } from '../data/cmsData';

const FloatingButtons = ({ phoneNumber = contactData?.phone || "+972-123456789", whatsappNumber = contactData?.whatsapp || "+972123456789" }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [textSpacing, setTextSpacing] = useState(1);
  const [colorMode, setColorMode] = useState('normal');
  const [screenReader, setScreenReader] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [cursorSize, setCursorSize] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [textAlignment, setTextAlignment] = useState('right');
  const [readerSpeed, setReaderSpeed] = useState(1);
  const [focusMode, setFocusMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  // Keyboard shortcut info modal
  const [shortcutsAnchorEl, setShortcutsAnchorEl] = useState(null);
  const shortcutsOpen = Boolean(shortcutsAnchorEl);

  const [textToSpeech, setTextToSpeech] = useState(false);

  const handleAccessibilityClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 70) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add('high-contrast');
      // Apply high contrast styles
      document.documentElement.style.filter = 'contrast(1.5)';
    } else {
      document.body.classList.remove('high-contrast');
      document.documentElement.style.filter = 'none';
    }
  };

  const handleColorModeChange = (event) => {
    const mode = event.target.value;
    setColorMode(mode);
    
    // Reset all filters first
    document.documentElement.style.filter = 'none';
    
    // Apply selected filter
    switch(mode) {
      case 'grayscale':
        document.documentElement.style.filter = 'grayscale(100%)';
        break;
      case 'invert':
        document.documentElement.style.filter = 'invert(100%)';
        break;
      case 'protanopia': // Red-green colorblindness
        document.documentElement.style.filter = 'grayscale(50%) sepia(50%)';
        break;
      case 'deuteranopia': // Another type of color blindness
        document.documentElement.style.filter = 'grayscale(40%) sepia(40%) hue-rotate(40deg)';
        break;
      case 'tritanopia': // Blue-yellow color blindness
        document.documentElement.style.filter = 'grayscale(40%) sepia(20%) hue-rotate(180deg)';
        break;
      default:
        // normal - no filter
        break;
    }
  };

  const handleTextSpacingChange = (event, newValue) => {
    setTextSpacing(newValue);
    document.body.style.letterSpacing = `${newValue}px`;
    document.body.style.wordSpacing = `${newValue * 2}px`;
    document.body.style.lineHeight = `${1.5 + (newValue * 0.1)}`;
  };

  const toggleScreenReader = () => {
    setScreenReader(!screenReader);
    // In a real implementation, this would initialize a screen reader service
    // This is just a placeholder
    if (!screenReader) {
      alert('Screen reader would be activated here in a real implementation');
    }
  };

  const resetAllSettings = () => {
    // Reset font size
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    
    // Reset contrast
    setHighContrast(false);
    document.body.classList.remove('high-contrast');
    
    // Reset color mode
    setColorMode('normal');
    document.documentElement.style.filter = 'none';
    
    // Reset text spacing
    setTextSpacing(1);
    document.body.style.letterSpacing = '0';
    document.body.style.wordSpacing = '0';
    document.body.style.lineHeight = '1.5';
    
    // Reset screen reader
    setScreenReader(false);

    // Reset dyslexic font
    setDyslexicFont(false);
    document.body.style.fontFamily = "";

    // Reset cursor size
    setCursorSize(1);
    document.documentElement.style.setProperty('--cursor-size', '16px');

    // Reset reduced motion
    setReduceMotion(false);
    document.body.classList.remove('reduce-motion');
    
    // Reset keyboard navigation
    setKeyboardNavigation(false);
    document.body.classList.remove('keyboard-navigation');
    
    // Reset text direction
    document.dir = 'rtl';
    
    // Reset text alignment
    setTextAlignment('right');
    document.body.style.textAlign = 'right';
    const alignmentStyle = document.getElementById('text-alignment-style');
    if (alignmentStyle) {
      alignmentStyle.remove();
    }
    
    // Reset reader speed
    setReaderSpeed(1);
    
    // Reset focus mode
    setFocusMode(false);
    const focusModeStyle = document.getElementById('focus-mode-style');
    if (focusModeStyle) {
      focusModeStyle.remove();
    }

    // Reset text-to-speech
    setTextToSpeech(false);
    document.body.classList.remove('text-to-speech');

    // Close the popover
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Add dyslexic-friendly font
  const handleDyslexicFontToggle = () => {
    setDyslexicFont(!dyslexicFont);
    if (!dyslexicFont) {
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.classList.remove('dyslexic-font');
    }
  };

  // Update cursor size
  const handleCursorSizeChange = (event, newValue) => {
    setCursorSize(newValue);
    document.documentElement.style.setProperty('--cursor-size', `${newValue * 16}px`);
  };
  
  // Toggle reduced motion
  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion);
    if (!reduceMotion) {
      document.body.classList.add('reduce-motion');
      // Apply CSS class that reduces animations
      document.querySelectorAll('*').forEach(element => {
        const style = window.getComputedStyle(element);
        if (style.animation !== 'none' || style.transition !== 'none') {
          element.style.animation = 'none';
          element.style.transition = 'none';
        }
      });
    } else {
      document.body.classList.remove('reduce-motion');
      // Remove inline styles to restore animations
      document.querySelectorAll('*').forEach(element => {
        if (element.style.animation === 'none') {
          element.style.removeProperty('animation');
        }
        if (element.style.transition === 'none') {
          element.style.removeProperty('transition');
        }
      });
    }
  };
  
  // Toggle keyboard navigation
  const toggleKeyboardNavigation = () => {
    setKeyboardNavigation(!keyboardNavigation);
    if (!keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
      // Enhance focus visibility
      document.documentElement.style.setProperty('--focus-outline-width', '4px');
      document.documentElement.style.setProperty('--focus-outline-color', '#4d90fe');
    } else {
      document.body.classList.remove('keyboard-navigation');
      document.documentElement.style.removeProperty('--focus-outline-width');
      document.documentElement.style.removeProperty('--focus-outline-color');
    }
  };
  
  // Handle text alignment change
  const handleTextAlignmentChange = (newAlignment) => {
    setTextAlignment(newAlignment);
    
    // Apply text alignment styles to the body
    document.body.style.textAlign = newAlignment;
    
    // Apply specific styles for flex containers and other elements
    const style = document.createElement('style');
    style.id = 'text-alignment-style';
    
    // Remove any existing alignment style element
    const existingStyle = document.getElementById('text-alignment-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    // Create CSS based on alignment
    let css = '';
    if (newAlignment === 'center') {
      css = `
        .MuiContainer-root, .MuiBox-root, .MuiPaper-root {
          text-align: center !important;
        }
        .MuiBox-root:not(.accessibility-panel *) {
          justify-content: center !important;
        }
      `;
    } else if (newAlignment === 'left') {
      css = `
        .MuiContainer-root, .MuiBox-root, .MuiPaper-root {
          text-align: left !important;
        }
        .MuiBox-root:not(.accessibility-panel *) {
          justify-content: flex-start !important;
        }
      `;
    } else if (newAlignment === 'right') {
      css = `
        .MuiContainer-root, .MuiBox-root, .MuiPaper-root {
          text-align: right !important;
        }
        .MuiBox-root:not(.accessibility-panel *) {
          justify-content: flex-end !important;
        }
      `;
    }
    
    style.innerHTML = css;
    document.head.appendChild(style);
  };

  // Handle reader speed change
  const handleReaderSpeedChange = (event, newValue) => {
    setReaderSpeed(newValue);
    
    // This would be connected to an actual screen reader
    // Here we're just setting a variable that could be used by one
    window.screenReaderSpeed = newValue;
    
    // For demonstration purposes only - would be removed in production
    if (screenReader) {
      console.log(`Screen reader speed set to ${newValue}x`);
    }
  };

  // Toggle focus mode
  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    
    if (!focusMode) {
      // Apply focus mode
      const style = document.createElement('style');
      style.id = 'focus-mode-style';
      style.innerHTML = `
        body:not(.accessibility-panel) > *:not(:hover):not(:focus-within) {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        body:not(.accessibility-panel) > *:hover, 
        body:not(.accessibility-panel) > *:focus-within {
          opacity: 1;
          transition: opacity 0.3s ease;
        }
      `;
      document.head.appendChild(style);
    } else {
      // Remove focus mode
      const focusModeStyle = document.getElementById('focus-mode-style');
      if (focusModeStyle) {
        focusModeStyle.remove();
      }
    }
  };

  // Handle tab change for accessibility panel
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Toggle shortcuts info
  const toggleShortcutsInfo = (event) => {
    setShortcutsAnchorEl(event ? event.currentTarget : null);
  };

  // Toggle text-to-speech functionality
  const toggleTextToSpeech = () => {
    setTextToSpeech(!textToSpeech);
    // Apply text-to-speech effect
    if (!textToSpeech) {
      // Enable text-to-speech
      document.body.classList.add('text-to-speech');
      // You would implement the actual text-to-speech functionality here
    } else {
      // Disable text-to-speech
      document.body.classList.remove('text-to-speech');
    }
  };

  // Handle phone call
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Register keyboard shortcuts
  const setupKeyboardShortcuts = () => {
    if (keyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardShortcuts);
    } else {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    }
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  };

  // Handle keyboard shortcuts
  const handleKeyboardShortcuts = (event) => {
    // Only apply shortcuts when modifier key is pressed
    if (event.altKey && event.shiftKey) {
      switch (event.key) {
        case '+':
          event.preventDefault();
          increaseFontSize();
          break;
        case '-':
          event.preventDefault();
          decreaseFontSize();
          break;
        case 'c':
          event.preventDefault();
          toggleHighContrast();
          break;
        case 'd':
          event.preventDefault();
          handleDyslexicFontToggle();
          break;
        case 'f':
          event.preventDefault();
          toggleFocusMode();
          break;
        case 'r':
          event.preventDefault();
          toggleReduceMotion();
          break;
        case 'a':
          event.preventDefault();
          handleAccessibilityClick(event);
          break;
        case 't':
          event.preventDefault();
          toggleTextToSpeech();
          break;
        case 'p':
          event.preventDefault();
          handlePhoneCall();
          break;
        default:
          break;
      }
    }
  };

  // Apply keyboard shortcuts when the component mounts or when keyboardNavigation changes
  useState(() => {
    setupKeyboardShortcuts();
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, [keyboardNavigation]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Phone Button */}
      <Tooltip title="התקשר לשירות לקוחות" placement="left" TransitionComponent={Zoom} arrow>
        <Fab
          color="primary"
          aria-label="התקשר לשירות לקוחות"
          size="medium"
          onClick={() => window.location.href = `tel:${phoneNumber}`}
          sx={{
            boxShadow: 3,
            bgcolor: '#FF8C00',
            color: 'white',
            '&:hover': {
              bgcolor: '#E67E00',
              transform: 'scale(1.05)',
            },
          }}
        >
          <PhoneIcon />
        </Fab>
      </Tooltip>
      
      {/* WhatsApp Button */}
      <Tooltip title="צור קשר בוואטסאפ" placement="left" TransitionComponent={Zoom} arrow>
        <Fab
          color="success"
          aria-label="צור קשר בוואטסאפ"
          size="medium"
          onClick={() =>
            window.open(
              `https://wa.me/${whatsappNumber}?text=היי, אני מעוניין לשמוע עוד פרטים על האירוע שלכם`,
              "_blank"
            )
          }
          sx={{
            boxShadow: 3,
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.05)',
            },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

      {/* Accessibility Button */}
      <Tooltip title="אפשרויות נגישות" placement="left" TransitionComponent={Zoom} arrow>
        <Badge 
          color="primary" 
          variant="dot" 
          invisible={!keyboardNavigation && !highContrast && !dyslexicFont}
        >
          <Fab
            color="secondary"
            aria-label="אפשרויות נגישות"
            size="medium"
            onClick={handleAccessibilityClick}
            aria-expanded={Boolean(anchorEl)}
            aria-haspopup="true"
            sx={{
              boxShadow: 3,
              bgcolor: '#1976d2',
              color: 'white',
              '&:hover': {
                bgcolor: '#115293',
                transform: 'scale(1.05)',
              },
            }}
          >
            <AccessibilityNewIcon />
          </Fab>
        </Badge>
      </Tooltip>

      {/* Accessibility Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 2,
            maxWidth: '100%',
            width: 350,
            mt: 1.5,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>אפשרויות נגישות</Typography>

        {/* Text Size */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>גודל טקסט</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={decreaseFontSize} color="primary" size="small">
              <TextDecreaseIcon />
            </IconButton>
            <Slider
              value={fontSize}
              min={70}
              max={150}
              step={10}
              onChange={(e, newValue) => setFontSize(newValue)}
              sx={{ mx: 2 }}
            />
            <IconButton onClick={increaseFontSize} color="primary" size="small">
              <TextIncreaseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Color Contrast */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">ניגודיות צבעים</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={highContrast}
                onChange={toggleHighContrast}
                color="primary"
              />
            }
            label="ניגודיות גבוהה"
          />
        </Box>

        {/* Dyslexic Font */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">סוג גופן</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={dyslexicFont}
                onChange={handleDyslexicFontToggle}
                color="primary"
              />
            }
            label="גופן ידידותי לדיסלקטים"
          />
        </Box>

        {/* Focus Mode */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">מצב מיקוד</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={focusMode}
                onChange={toggleFocusMode}
                color="primary"
              />
            }
            label="הדגש אזור מוקד בעת ריחוף"
          />
        </Box>

        {/* Reduced Motion */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">הפחתת אנימציות</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={reduceMotion}
                onChange={toggleReduceMotion}
                color="primary"
              />
            }
            label="הפחת תנועה והנפשות"
          />
        </Box>

        {/* Text to Speech */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">המרת טקסט לדיבור</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={textToSpeech}
                onChange={toggleTextToSpeech}
                color="primary"
              />
            }
            label="הפעל קריאת טקסט (Alt+Shift+T)"
          />
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
            סמן טקסט כלשהו באתר ולחץ Alt+Shift+T כדי להאזין לו
          </Typography>
        </Box>

        {/* Direct Call */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">שיחה ישירה</Typography>
          <Button
            variant="contained"
            startIcon={<LocalPhoneIcon />}
            onClick={handlePhoneCall}
            sx={{ 
              mt: 1, 
              bgcolor: '#4CAF50', 
              '&:hover': { bgcolor: '#45a049' } 
            }}
          >
            התקשר לקבלת סיוע
          </Button>
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
            לחץ כדי להתקשר לצוות התמיכה שלנו
          </Typography>
        </Box>

        {/* Keyboard Shortcuts */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Button
            size="small"
            onClick={toggleShortcutsInfo}
            startIcon={<KeyboardIcon />}
          >
            קיצורי מקלדת
          </Button>
        </Box>
      </Menu>

      {/* Keyboard shortcuts info popover */}
      <Popover
        open={shortcutsOpen}
        anchorEl={shortcutsAnchorEl}
        onClose={() => setShortcutsAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 3, width: 300, maxWidth: '100%' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>קיצורי מקלדת</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2">Alt+Shift+A: תפריט נגישות</Typography>
            <Typography variant="body2">Alt+Shift+C: החלפת ניגודיות</Typography>
            <Typography variant="body2">Alt+Shift+D: פונט דיסלקטי</Typography>
            <Typography variant="body2">Alt+Shift+F: מצב מיקוד</Typography>
            <Typography variant="body2">Alt+Shift+M: הפחתת תנועה</Typography>
            <Typography variant="body2">Alt+Shift+Plus: הגדלת טקסט</Typography>
            <Typography variant="body2">Alt+Shift+Minus: הקטנת טקסט</Typography>
            <Typography variant="body2">Alt+Shift+T: המרת טקסט לדיבור</Typography>
            <Typography variant="body2">Alt+Shift+P: שיחת טלפון ישירה</Typography>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default FloatingButtons; 