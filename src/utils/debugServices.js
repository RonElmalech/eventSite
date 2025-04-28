import { createServiceSlug } from './slugify';
import { getAllServices } from '../data/services';

// Map of route parameters to service titles
export const routeToTitleMap = {
  'wedding': 'חתונות',
  'barmitzvah': 'בר מצווה',
  'batmitzvah': 'בת מצווה',
  'brit': 'ברית',
  'henna': 'חינה', 
  'birthday': 'ימי הולדת',
  'business': 'אירועים עסקיים'
};

// Get the correct service for a route
export const getServiceForRoute = (routeName) => {
  // Get the Hebrew title for this route
  const hebrewTitle = routeToTitleMap[routeName];
  
  if (!hebrewTitle) {
    console.error(`No Hebrew title found for route: ${routeName}`);
    return null;
  }
  
  // Get all services
  const allServices = getAllServices();
  
  // Find the matching service by title
  const service = allServices.find(s => s.title === hebrewTitle);
  
  if (!service) {
    console.error(`No service found with title: ${hebrewTitle}`);
    return null;
  }
  
  console.log(`Found service for route ${routeName}:`, {
    id: service.id,
    title: service.title,
    slug: service.slug
  });
  
  return service;
}; 