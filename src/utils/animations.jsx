import { motion } from 'framer-motion';
import { Box } from '@mui/material';

// Shared animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut"
    }
  }
};

// Shared confetti colors
export const confettiColors = [
  "#FFC107", "#FF5722", "#E91E63", "#3F51B5", "#4CAF50"
];

// Shared background gradient animations
export const createGradientAnimation = (theme, position = 'top-left', size = 300) => {
  const positions = {
    'top-left': { top: '-100px', left: '-100px' },
    'top-right': { top: '-100px', right: '-100px' },
    'bottom-left': { bottom: '-150px', left: '-150px' },
    'bottom-right': { bottom: '-150px', right: '-150px' }
  };

  return {
    sx: {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, transparent 70%)`,
      zIndex: 0,
      willChange: 'transform',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      ...positions[position]
    },
    animate: {
      x: [0, 20, 0],
      y: [0, 20, 0],
    },
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
};

// Shared confetti components
export const ConfettiPiece = ({ color = "#ff0000", size = 8, top, left, right, bottom, delay = 0 }) => {
  const shape = Math.floor(Math.random() * 2);
  const borderRadius = shape === 0 ? '0%' : '50%';
  const width = size;
  const height = size;
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: width,
        height: height,
        borderRadius: borderRadius,
        background: color,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
      initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
      animate={{ 
        y: [0, 150 + Math.random() * 200],
        x: [0, (Math.random() - 0.5) * 100],
        opacity: [0, 0.8, 0],
        rotate: [0, Math.random() * 180]
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        repeatDelay: 2 + Math.random() * 3 + delay,
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

export const ConfettiGroup = ({ count = 5, area = "top-left", colors = confettiColors }) => {
  const getPosition = () => {
    switch(area) {
      case "top-left": return { top: "5%", left: "5%" };
      case "top-right": return { top: "5%", right: "5%" };
      case "bottom-left": return { bottom: "15%", left: "5%" };
      case "bottom-right": return { bottom: "15%", right: "5%" };
      case "center-left": return { top: "40%", left: "5%" };
      case "center-right": return { top: "40%", right: "5%" };
      case "top-center": return { top: "5%", left: "45%" };
      case "bottom-center": return { bottom: "15%", left: "45%" };
      default: return { top: "5%", left: "5%" };
    }
  };

  const position = getPosition();
  
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <ConfettiPiece
          key={`${area}-${index}`}
          color={colors[index % colors.length]}
          size={Math.random() * 6 + 3}
          delay={index * 0.2}
          {...position}
        />
      ))}
    </>
  );
};

// Shared animation wrapper
export const AnimatedSection = ({ children, isMobile, theme, position = 'top-left', size = 300 }) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {!isMobile && (
        <>
          <motion.div {...createGradientAnimation(theme, position, size)} />
          <ConfettiGroup area={position} count={5} />
        </>
      )}
      {children}
    </Box>
  );
}; 