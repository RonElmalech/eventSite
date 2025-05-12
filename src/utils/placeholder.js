/**
 * Placeholder images for services when actual images are not available
 * These are used as fallbacks in the UI
 */
export const placeholderImages = {
  // Service-specific placeholders
  service: {
    wedding: './images/services/wedding.jpg',
    barmitzvah: './images/services/barmitzvah.jpg',
    henna: './images/services/henna.jpg',
    birthday: './images/services/birthday.jpg',
    brit: './images/services/brit.jpg',
    business: './images/services/business.jpg',
  },
  // Content type placeholders
  content: {
    eventGeneric: './images/placeholders/event-generic.jpg',
    eventHero: './images/placeholders/event-hero.jpg',
    venue: './images/placeholders/venue.jpg',
    food: './images/placeholders/food.jpg',
    decoration: './images/placeholders/decoration.jpg',
    music: './images/placeholders/music.jpg',
    team: './images/placeholders/team.jpg',
    about: './images/placeholders/about.jpg',
  },
  // Event type placeholders
  eventType: {
    private: './images/placeholders/private.jpg',
    festival: './images/placeholders/festival.jpg',
  },
  // Default fallback image
  default: './images/placeholders/default.jpg'
};

// Function to get an image URL for a specific service
export const getServiceImage = (serviceId) => {
  switch (serviceId) {
    case 1:
      return placeholderImages.service.wedding;
    case 2:
      return placeholderImages.service.business;
    case 3:
      return placeholderImages.service.birthday;
    case 4:
      return placeholderImages.service.barmitzvah;
    case 5:
      return placeholderImages.service.henna;
    case 6:
      return placeholderImages.service.brit;
    default:
      return placeholderImages.default;
  }
}; 