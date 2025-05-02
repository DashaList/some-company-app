/* eslint-disable no-console */

const sendContact = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  return new Response(`Thank you for your interest, ${data?.name}`);
};

export default sendContact;
