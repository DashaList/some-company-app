import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    padding: theme.spacing(7),

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },

  title: {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },

  form: {
    minWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: '0 20px 60px rgba(108, 99, 255, 0.1)',

    [theme.breakpoints.down('xs')]: {
      minWidth: 0,
      width: '100%',
    },
  },
});
