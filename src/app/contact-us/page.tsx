'use client';

import { ContactForm } from '@/components/ContactForm';
import { useStyles } from './styles';

export default function ContactUs() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <ContactForm />
    </div>
  );
}
