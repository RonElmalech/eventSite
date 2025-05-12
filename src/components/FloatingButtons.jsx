import { useState, useEffect } from 'react';
import { Box, Fab, Tooltip, Popover, Button, Typography, IconButton, Divider, Switch, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Slider, Grid, Select, MenuItem, Badge, Tabs, Tab, Menu } from '@mui/material';
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
import ShareIcon from '@mui/icons-material/Share';
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
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [textAlignment, setTextAlignment] = useState('right');
  const [readerSpeed, setReaderSpeed] = useState(1);
  const [focusMode, setFocusMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  // Keyboard shortcut info modal
  const [shortcutsAnchorEl, setShortcutsAnchorEl] = useState(null);
  const shortcutsOpen = Boolean(shortcutsAnchorEl);

  const [textToSpeech, setTextToSpeech] = useState(false);

  // Add useEffect for loading the hostages ticker script
  useEffect(() => {
    // First clear any existing sessionStorage flag that might prevent the ticker from showing
    if (window.sessionStorage) {
      window.sessionStorage.removeItem('btnhSessionClosed');
    }

    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://bringthemhomenow.net/1.3.0/hostages-ticker.js';
    script.setAttribute(
      'integrity',
      'sha384-MmP7bD5QEJWvJccg9c0lDnn3LjjqQWDiRCxRV+NU8hij15icuwb29Jfw1TqJwuSv'
    );
    script.setAttribute('crossorigin', 'anonymous');
    
    // Override the sessionStorage function after the script loads
    script.onload = () => {
      // Create a MutationObserver to watch for the close button click
      const observer = new MutationObserver((mutations) => {
        // If the ticker is removed from DOM, reload it after a delay
        if (!document.getElementById('bthn')) {
          setTimeout(() => {
            // Clear the sessionStorage flag
            if (window.sessionStorage) {
              window.sessionStorage.removeItem('btnhSessionClosed');
            }
            
            // Reload the script
            const newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = 'https://bringthemhomenow.net/1.3.0/hostages-ticker.js';
            newScript.setAttribute(
              'integrity',
              'sha384-MmP7bD5QEJWvJccg9c0lDnn3LjjqQWDiRCxRV+NU8hij15icuwb29Jfw1TqJwuSv'
            );
            newScript.setAttribute('crossorigin', 'anonymous');
            document.getElementsByTagName('head')[0].appendChild(newScript);
          }, 500);
        }
      });
      
      // Start observing the document body
      observer.observe(document.body, { childList: true, subtree: true });
    };
    
    // Append the script to the head
    document.getElementsByTagName('head')[0].appendChild(script);

    // Clean up function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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

  const toggleKeyboardNavigation = () => {
    setKeyboardNavigation(!keyboardNavigation);
    if (!keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  };

  const handleTextAlignmentChange = (newAlignment) => {
    setTextAlignment(newAlignment);
    document.body.style.textAlign = newAlignment;
  };

  const handleReaderSpeedChange = (event, newValue) => {
    setReaderSpeed(newValue);
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    if (!focusMode) {
      const style = document.createElement('style');
      style.id = 'focus-mode-style';
      style.textContent = `
        body > *:not(:focus):not(:hover) {
          opacity: 0.3;
        }
      `;
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('focus-mode-style');
      if (style) {
        style.remove();
      }
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleShortcutsInfo = (event) => {
    setShortcutsAnchorEl(event.currentTarget);
  };

  const toggleTextToSpeech = () => {
    setTextToSpeech(!textToSpeech);
    if (!textToSpeech) {
      document.body.classList.add('text-to-speech');
    } else {
      document.body.classList.remove('text-to-speech');
    }
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const setupKeyboardShortcuts = () => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  };

  const handleKeyboardShortcuts = (event) => {
    if (event.altKey) {
      switch(event.key) {
        case 'a':
          handleAccessibilityClick(event);
          break;
        case 'c':
          handlePhoneCall();
          break;
        case 'w':
          window.open(`https://wa.me/${whatsappNumber}`, '_blank');
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    setupKeyboardShortcuts();
  }, []);

  // Improved share functionality with WhatsApp option
  const handleShare = async () => {
    try {
      // Get current page title and URL
      const pageTitle = document.title;
      const pageUrl = window.location.href;
      
      // Create share message in Hebrew
      const shareMessage = `בואו לראות את האתר "הקסם באירוע" - מה שיהפוך את האירוע שלכם למושלם: ${pageUrl}`;
      
      // Create a menu to choose sharing method
      const shareOptions = document.createElement('div');
      shareOptions.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        direction: rtl;
        text-align: center;
        min-width: 250px;
      `;
      
      const heading = document.createElement('h3');
      heading.textContent = 'איך תרצה לשתף?';
      heading.style.margin = '0 0 15px 0';
      shareOptions.appendChild(heading);
      
      // WhatsApp option
      const whatsappBtn = document.createElement('button');
      whatsappBtn.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="margin-right:10px;fill:#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> וואטסאפ</span>';
      whatsappBtn.style.cssText = `
        background: #ffffff;
        color: #000000;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 5px 0;
        width: 100%;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        display: block;
      `;
      whatsappBtn.onclick = () => {
        // Encode message for URL
        const encodedMessage = encodeURIComponent(shareMessage);
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        document.body.removeChild(shareOptions);
        document.body.removeChild(overlay);
      };
      shareOptions.appendChild(whatsappBtn);
      
      // Copy link option
      const copyBtn = document.createElement('button');
      copyBtn.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="margin-right:10px;fill:#333"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> העתק קישור</span>';
      copyBtn.style.cssText = `
        background: #ffffff;
        color: #000000;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 5px 0;
        width: 100%;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        display: block;
      `;
      copyBtn.onclick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = shareMessage;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        document.body.removeChild(shareOptions);
        document.body.removeChild(overlay);
        alert('קישור לשיתוף הועתק ללוח! כעת תוכל להדביק אותו בכל מקום.');
      };
      shareOptions.appendChild(copyBtn);
      
      // Cancel button
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'ביטול';
      cancelBtn.style.cssText = `
        background: none;
        color: #666;
        border: none;
        padding: 10px;
        margin: 10px 0 0 0;
        width: 100%;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      `;
      cancelBtn.onclick = () => {
        document.body.removeChild(shareOptions);
        document.body.removeChild(overlay);
      };
      shareOptions.appendChild(cancelBtn);
      
      // Add dimmed overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
      `;
      overlay.onclick = () => {
        document.body.removeChild(shareOptions);
        document.body.removeChild(overlay);
      };
      
      // Add elements to body
      document.body.appendChild(overlay);
      document.body.appendChild(shareOptions);
      
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      {/* Hostages Ticker Widget */}
      <Box sx={{ 
        position: 'fixed', 
        top: 100, 
        right: 16, 
        zIndex: 1000,
      }}>
        <div id="bthn" lang="he"></div>
      </Box>

      {/* Floating Buttons */}
      <Box sx={{ 
        position: 'fixed', 
        bottom: 16, 
        right: 16, 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Tooltip title="WhatsApp">
          <Fab
            color="success"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <WhatsAppIcon />
          </Fab>
        </Tooltip>

        <Tooltip title="התקשר">
          <Fab
            color="secondary"
            onClick={handlePhoneCall}
          >
            <CallIcon />
          </Fab>
        </Tooltip>
        
        {/* Add Share Button */}
        <Tooltip title="שתף דף זה">
          <Fab
            color="info"
            onClick={handleShare}
          >
            <ShareIcon />
          </Fab>
        </Tooltip>

        <Tooltip title="נגישות">
          <Fab
            color="primary"
            onClick={handleAccessibilityClick}
          >
            <AccessibilityNewIcon />
          </Fab>
        </Tooltip>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Box sx={{ p: 2, width: 300 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">הגדרות נגישות</Typography>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>

            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
              <Tab label="טקסט" />
              <Tab label="צבעים" />
              <Tab label="ניווט" />
            </Tabs>

            {tabValue === 0 && (
              <Box>
                <Typography variant="subtitle2" gutterBottom>גודל טקסט</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton onClick={decreaseFontSize} size="small">
                    <TextDecreaseIcon />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>{fontSize}%</Typography>
                  <IconButton onClick={increaseFontSize} size="small">
                    <TextIncreaseIcon />
                  </IconButton>
                  <IconButton onClick={resetFontSize} size="small">
                    <ReplayIcon />
                  </IconButton>
                </Box>

                <FormControlLabel
                  control={
                    <Switch
                      checked={dyslexicFont}
                      onChange={handleDyslexicFontToggle}
                    />
                  }
                  label="פונט דיסלקטי"
                />

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  מרווח טקסט
                </Typography>
                <Slider
                  value={textSpacing}
                  onChange={handleTextSpacingChange}
                  min={0}
                  max={3}
                  step={0.1}
                  marks
                  valueLabelDisplay="auto"
                />

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  יישור טקסט
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <IconButton
                    onClick={() => handleTextAlignmentChange('right')}
                    color={textAlignment === 'right' ? 'primary' : 'default'}
                  >
                    <FormatAlignRightIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleTextAlignmentChange('center')}
                    color={textAlignment === 'center' ? 'primary' : 'default'}
                  >
                    <FormatAlignCenterIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleTextAlignmentChange('left')}
                    color={textAlignment === 'left' ? 'primary' : 'default'}
                  >
                    <FormatAlignLeftIcon />
                  </IconButton>
                </Box>
              </Box>
            )}

            {tabValue === 1 && (
              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={highContrast}
                      onChange={toggleHighContrast}
                    />
                  }
                  label="ניגודיות גבוהה"
                />

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  מצב צבעים
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <Select
                    value={colorMode}
                    onChange={handleColorModeChange}
                    size="small"
                  >
                    <MenuItem value="normal">רגיל</MenuItem>
                    <MenuItem value="grayscale">גווני אפור</MenuItem>
                    <MenuItem value="invert">היפוך צבעים</MenuItem>
                    <MenuItem value="protanopia">פרוטנופיה</MenuItem>
                    <MenuItem value="deuteranopia">דוטרנופיה</MenuItem>
                    <MenuItem value="tritanopia">טריטנופיה</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}

            {tabValue === 2 && (
              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={keyboardNavigation}
                      onChange={toggleKeyboardNavigation}
                    />
                  }
                  label="ניווט מקלדת"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={focusMode}
                      onChange={toggleFocusMode}
                    />
                  }
                  label="מצב מיקוד"
                />

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  מהירות קריאה
                </Typography>
                <Slider
                  value={readerSpeed}
                  onChange={handleReaderSpeedChange}
                  min={0.5}
                  max={2}
                  step={0.1}
                  marks
                  valueLabelDisplay="auto"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={textToSpeech}
                      onChange={toggleTextToSpeech}
                    />
                  }
                  label="קריאה קולית"
                />
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                startIcon={<InfoIcon />}
                onClick={toggleShortcutsInfo}
                size="small"
              >
                קיצורי מקלדת
              </Button>
              <Button
                startIcon={<ReplayIcon />}
                onClick={resetAllSettings}
                size="small"
              >
                איפוס
              </Button>
            </Box>
          </Box>
        </Popover>

        <Menu
          anchorEl={shortcutsAnchorEl}
          open={shortcutsOpen}
          onClose={() => setShortcutsAnchorEl(null)}
        >
          <Box sx={{ p: 2, width: 300 }}>
            <Typography variant="subtitle1" gutterBottom>
              קיצורי מקלדת
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Alt + A: פתיחת תפריט נגישות
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Alt + C: התקשרות
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Alt + W: WhatsApp
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Menu>
      </Box>
    </>
  );
};

export default FloatingButtons; 