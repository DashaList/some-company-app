import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    padding: theme.spacing(7),
  },

  table: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: theme.spacing(20),
    padding: theme.spacing(2),
  },

  bottom: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  },
});
