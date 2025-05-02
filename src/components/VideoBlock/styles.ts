import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(14),
    padding: theme.spacing(7),
  },

  left: {
    maxWidth: 1000,
    paddingRight: theme.spacing(10),
    textWrap: 'pretty',
  },
});
