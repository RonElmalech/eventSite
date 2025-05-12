/**
 * Placeholder images for services when actual images are not available
 * These are used as fallbacks in the UI
 */
export const placeholderImages = {
  // Service-specific placeholders
  service: {
    wedding: `${import.meta.env.BASE_URL}images/services/wedding.jpg`,
    barmitzvah: `${import.meta.env.BASE_URL}images/services/barmitzvah.jpg`,
    henna: `${import.meta.env.BASE_URL}images/services/henna.jpg`,
    birthday: `${import.meta.env.BASE_URL}images/services/birthday.jpg`,
    brit: `${import.meta.env.BASE_URL}images/services/brit.jpg`,
    business: `${import.meta.env.BASE_URL}images/services/business.jpg`,
  },
  // Content type placeholders
  content: {
    eventGeneric: `${import.meta.env.BASE_URL}images/placeholders/event-generic.jpg`,
    eventHero: `${import.meta.env.BASE_URL}images/placeholders/event-hero.jpg`,
    venue: `${import.meta.env.BASE_URL}images/placeholders/venue.jpg`,
    food: `${import.meta.env.BASE_URL}images/placeholders/food.jpg`,
    decoration: `${import.meta.env.BASE_URL}images/placeholders/decoration.jpg`,
    music: `${import.meta.env.BASE_URL}images/placeholders/music.jpg`,
    team: `${import.meta.env.BASE_URL}images/placeholders/team.jpg`,
    about: `${import.meta.env.BASE_URL}images/placeholders/about.jpg`,
  },
  // Event type placeholders
  eventType: {
    private: `${import.meta.env.BASE_URL}images/placeholders/private.jpg`,
    festival: `${import.meta.env.BASE_URL}images/placeholders/festival.jpg`,
  },
  // Default fallback image
  default: `${import.meta.env.BASE_URL}images/placeholders/default.jpg`
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