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

  form: {
    minWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    backgroundColor: 'white',
    borderRadius: 8,
    border: '1px solid rgba(0, 0, 0, 0.23)',

    [theme.breakpoints.down('xs')]: {
      minWidth: 0,
      width: '100%',
    },
  },
});
