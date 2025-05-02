/* eslint-disable no-console */
'use server';

import { ActionResponse } from './types';

export const submitContactForm = async (
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> => {
  const response = await fetch(
    'https://some-company-website.netlify.app/.netlify/functions/sendContact',
    {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    },
  );

  const message = await response.text();
  console.log('response', message);
  return {
    success: true,
    message,
  };
};
