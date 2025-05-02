import { ContactFormData } from './types';

export const fetchSendContact = (data: ContactFormData) =>
  fetch('https://some-company-website.netlify.app/.netlify/functions/sendContact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
