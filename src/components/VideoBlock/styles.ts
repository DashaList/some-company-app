import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(14),
    padding: theme.spacing(7),

    [theme.breakpoints.down('lg')]: {
      gap: theme.spacing(5),
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },

  left: {
    maxWidth: 1000,
    paddingRight: theme.spacing(10),
    textWrap: 'pretty',

    [theme.breakpoints.down('lg')]: {
      paddingRight: theme.spacing(5),
    },
  },
});
