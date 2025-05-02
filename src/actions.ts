/* eslint-disable no-console */
'use server';

import { ActionResponse, ContactFormData } from './types';

export const submitContactForm = async (
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> => {
  const rawData: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  console.log(rawData);
  return {
    success: true,
    message: `Thank you for your interest, ${rawData.name}`,
  };
};
