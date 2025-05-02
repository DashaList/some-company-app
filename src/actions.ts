'use server';

import { fetchSendContact } from './api';
import { ActionResponse } from './types';

export const submitContactForm = async (
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> => {
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  try {
    const response = await fetchSendContact({ name, email, message });
    const result = await response.json();

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: true,
      message: 'Error occurred. Please try again later.',
    };
  }
};
