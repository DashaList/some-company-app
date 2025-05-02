import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    padding: theme.spacing(7),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },

  title: {
    backgroundColor: theme.palette.primary.main,
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },

  table: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: theme.spacing(10),
    padding: theme.spacing(2),

    [theme.breakpoints.down('lg')]: {
      gap: theme.spacing(4),
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },

  card: {
    padding: theme.spacing(4),
    borderRadius: 16,
    borderTop: `4px solid ${theme.palette.secondary.main}`,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(108, 99, 255, 0.1)',
    },
  },

  text: {
    color: theme.palette.text.secondary,
  },

  bottom: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
});
