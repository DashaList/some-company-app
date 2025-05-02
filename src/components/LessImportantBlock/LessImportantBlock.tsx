'use client';

import { FC } from 'react';
import { useStyles } from './styles';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

export const LessImportantBlock: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Less important title
      </Typography>
      <Link href={'/contact-us'}>
        <Button variant="contained" size="large">
          Contact us
        </Button>
      </Link>
    </div>
  );
};
