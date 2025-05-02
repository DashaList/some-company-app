import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    padding: theme.spacing(7),
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      gap: theme.spacing(2),
    },
  },
});
