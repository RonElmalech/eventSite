/**
 * Placeholder images for services when actual images are not available
 * These are used as fallbacks in the UI
 */
export const placeholderImages = {
  // Service specific placeholders
  wedding: '/images/placeholders/wedding.jpg',
  barmitzvah: '/images/placeholders/barmitzvah.jpg',
  henna: '/images/placeholders/henna.jpg',
  birthday: '/images/placeholders/birthday.jpg',
  brit: '/images/placeholders/brit.jpg',
  business: '/images/placeholders/business.jpg',
  
  // Generic placeholders by category
  eventGeneric: '/images/placeholders/event-generic.jpg',
  eventHero: '/images/placeholders/event-hero.jpg',
  venue: '/images/placeholders/venue.jpg',
  food: '/images/placeholders/food.jpg',
  decoration: '/images/placeholders/decoration.jpg',
  music: '/images/placeholders/music.jpg',
  team: '/images/placeholders/team.jpg',
  about: '/images/placeholders/about.jpg',
  
  // Additional placeholders for legacy compatibility
  private: '/images/placeholders/private.jpg',
  festival: '/images/placeholders/festival.jpg',
  
  // Default placeholder if nothing else matches
  default: '/images/placeholders/default.jpg'
};

// Function to get an image URL for a specific service
export const getServiceImage = (serviceId) => {
  switch (serviceId) {
    case 1:
      return placeholderImages.wedding;
    case 2:
      return placeholderImages.business;
    case 3:
      return placeholderImages.birthday;
    case 4:
      return placeholderImages.barmitzvah;
    case 5:
      return placeholderImages.henna;
    case 6:
      return placeholderImages.brit;
    default:
      return placeholderImages.default;
  }
}; 