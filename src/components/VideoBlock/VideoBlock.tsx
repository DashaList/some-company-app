'use client';

import { FC } from 'react';
import { useStyles } from './styles';
import { YouTubeEmbed } from '@next/third-parties/google';
import { Typography } from '@mui/material';

export const VideoBlock: FC = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.left}>
        <Typography variant="h1" gutterBottom className={classes.title}>
          Most important title on the page
        </Typography>
        <Typography variant="h6" component="p" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
          condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
        </Typography>
      </div>

      <YouTubeEmbed
        videoid="dQw4w9WgXcQ"
        style="max-width: 1000px; margin: 0 auto; border-radius: 16px"
      />
    </section>
  );
};
