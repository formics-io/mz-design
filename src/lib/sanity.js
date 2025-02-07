import { createClient } from '@sanity/client';

// Initialize the Sanity client
const client = createClient({
  projectId: "joxx5irp",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: true,
  token:"skmYPTGB1fBf560tOjz3Wal0H68XTgAauFJhiD1HVjHMKHmie8dq2HErIh2ujumrkz9Hi3ss61DSiaZyVa7FlvX9DnakmoH6bwzzOdA7Eb0JBCNH8Jy5LsX15vRBejU1RsOORRTjYGYWvoNqP9AoppgWcCsDB8dlJGgINDF10Sh3Rg1j7uEt",
});



export default client;
