/**
 * Get the base URL for assets based on environment
 */
const baseUrl = import.meta.env.MODE === 'production' ? '/TheMagicOfTheEvent' : '';

/**
 * Placeholder images for services when actual images are not available
 * These are used as fallbacks in the UI
 */
export const placeholderImages = {
  // Service-specific placeholders
  service: {
    wedding: `${baseUrl}/images/services/wedding.jpg`,
    barmitzvah: `${baseUrl}/images/services/barmitzvah.jpg`,
    henna: `${baseUrl}/images/services/henna.jpg`,
    birthday: `${baseUrl}/images/services/birthday.jpg`,
    brit: `${baseUrl}/images/services/brit.jpg`,
    business: `${baseUrl}/images/services/business.jpg`,
  },
  // Content type placeholders
  content: {
    eventGeneric: `${baseUrl}/images/placeholders/event-generic.jpg`,
    eventHero: `${baseUrl}/images/placeholders/event-hero.jpg`,
    venue: `${baseUrl}/images/placeholders/venue.jpg`,
    food: `${baseUrl}/images/placeholders/food.jpg`,
    decoration: `${baseUrl}/images/placeholders/decoration.jpg`,
    music: `${baseUrl}/images/placeholders/music.jpg`,
    team: `${baseUrl}/images/placeholders/team.jpg`,
    about: `${baseUrl}/images/placeholders/about.jpg`,
  },
  // Event type placeholders
  eventType: {
    private: `${baseUrl}/images/placeholders/private.jpg`,
    festival: `${baseUrl}/images/placeholders/festival.jpg`,
  },
  // Default fallback image
  default: `${baseUrl}/images/placeholders/default.jpg`
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