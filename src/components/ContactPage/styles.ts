import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.background.paper,
    },
  },
});
