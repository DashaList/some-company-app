/* eslint-disable no-console */

const sendContact = async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const data = await req.json();

    const { name, email, message } = data || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing name, email, or message' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Received contact:', { name, email, message });

    return new Response(JSON.stringify({ message: `Thank you for your interest, ${name}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error parsing request body:', error);
    return new Response(JSON.stringify({ error: 'Invalid JSON or server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default sendContact;
