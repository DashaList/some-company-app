/* eslint-disable no-console */

const sendContact = async (req: Request) => {
  console.log(req.body);
  // const  name  = req.body?.name;
  const name = 'Ivan';
  return new Response(`Thank you for your interest, ${name}`);
};

export default sendContact;
