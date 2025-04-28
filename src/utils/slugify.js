/**
 * Converts a string to a URL-friendly slug format
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The URL-friendly slug
 */
export const slugify = (text) => {
  // Simple Hebrew-friendly slugify function
  // Remove special characters, replace spaces with hyphens, convert to lowercase
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')     // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')         // Trim hyphens from start
    .replace(/-+$/, '');        // Trim hyphens from end
};

/**
 * Creates a service slug from a service title
 * @param {string} title - The service title
 * @returns {string} - The service slug
 */
export const createServiceSlug = (title) => {
  return slugify(title);
}; 