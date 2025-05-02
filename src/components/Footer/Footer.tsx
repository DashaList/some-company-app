'use client';

import { FC } from 'react';
import { useStyles } from './styles';
import Link from 'next/link';
import { Typography } from '@mui/material';

export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.root}>
      <Link href={'/'}>
        <Typography variant="h6" component="div">
          Some Company 2024
        </Typography>
      </Link>
    </footer>
  );
};
