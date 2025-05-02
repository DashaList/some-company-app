import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    padding: theme.spacing(7),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },

  table: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: theme.spacing(20),
    padding: theme.spacing(2),

    [theme.breakpoints.down('lg')]: {
      gap: theme.spacing(10),
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: theme.spacing(5),
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },

  bottom: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
});
