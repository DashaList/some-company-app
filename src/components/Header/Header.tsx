'use client';

import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { useStyles } from './styles';

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.root}>
      <Link href={'/'}>
        <Typography variant="h4" component="div" className={classes.logo}>
          Some Company
        </Typography>
      </Link>
      <Link href={'/contact-us'}>
        <Button variant="contained" size="large">
          Contact us
        </Button>
      </Link>
    </header>
  );
};
