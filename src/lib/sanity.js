import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
const client = createClient({
  projectId: "joxx5irp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

/**
 * Generate a URL for a Sanity image
 * @param {object|string} source - The image object or string
 * @returns {string} - The generated image URL
 */
export const urlFor = (source) => builder.image(source).url();

export default client;
