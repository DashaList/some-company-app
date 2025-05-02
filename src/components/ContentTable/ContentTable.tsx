'use client';

import { FC } from 'react';
import { useStyles } from './styles';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

const content = [
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
];

export const ContentTable: FC = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2" align="center" gutterBottom>
        Also very important title
      </Typography>
      <div className={classes.table}>
        {content.map(({ title, text }, index) => (
          <div key={index}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{text}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.bottom}>
        <Link href={'/contact-us'}>
          <Button variant="contained" size="large">
            Contact us
          </Button>
        </Link>
      </div>
    </section>
  );
};
