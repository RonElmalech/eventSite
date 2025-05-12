import React from 'react';
import { placeholderImages } from '../utils/placeholder';

/**
 * A static card component for displaying testimonials without Material-UI to avoid progressive loading
 */
const TestimonialCard = ({ testimonial }) => {
  // Extract properties from the testimonial object
  const { name, role, quote, date, image, imageUrl } = testimonial;
  
  // Use placeholder if no image is provided
  const avatarSrc = image || imageUrl || placeholderImages.avatar || '/images/placeholders/avatar.jpg';
  
  return (
    <div style={{ 
      padding: '24px', 
      height: '280px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '8px',
      boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      position: 'relative'
    }}>
      <div style={{ 
        marginBottom: '24px', 
        flexGrow: 1, 
        fontStyle: 'italic', 
        color: '#666',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical'
      }}>
        "{quote}"
      </div>
      
      <div style={{ 
        width: '100%', 
        height: '1px', 
        backgroundColor: '#eee', 
        margin: '16px 0' 
      }} />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '16px',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#eee'
        }}>
          <img
            src={avatarSrc}
            alt={name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        <div>
          <div style={{ 
            fontWeight: 'bold',
            fontSize: '1rem',
            marginBottom: '4px'
          }}>
            {name}
          </div>
          
          <div style={{ 
            fontSize: '0.875rem',
            color: '#666'
          }}>
            {role}{date ? `, ${date}` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 