import { createServiceSlug } from './slugify';

// Service titles from our services data
const serviceTitles = [
  "חתונות",
  "בר מצווה",
  "חינה",
  "ימי הולדת",
  "ברית",
  "אירועים עסקיים"
];

// Generate and log the slugs
console.log('Service slug mapping:');
serviceTitles.forEach(title => {
  console.log(`${title} -> ${createServiceSlug(title)}`);
});

export const routeToSlugMap = {
  'wedding': 'חתונות',
  'barmitzvah': 'בר מצווה',
  'henna': 'חינה',
  'birthday': 'ימי הולדת',
  'brit': 'ברית',
  'business': 'אירועים עסקיים'
};

// Function to get Hebrew title from route slug
export const getHebrewTitleFromRouteSlug = (routeSlug) => {
  return routeToSlugMap[routeSlug] || null;
};

// Function to get service slug from route slug
export const getServiceSlugFromRouteSlug = (routeSlug) => {
  const hebrewTitle = getHebrewTitleFromRouteSlug(routeSlug);
  if (hebrewTitle) {
    return createServiceSlug(hebrewTitle);
  }
  return null;
}; 