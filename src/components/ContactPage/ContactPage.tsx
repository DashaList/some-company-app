'use client';

import { FC } from 'react';
import { useStyles } from './styles';
import { ContactForm } from '@/components/ContactForm';

export const ContactPage: FC = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <ContactForm />
    </main>
  );
};
