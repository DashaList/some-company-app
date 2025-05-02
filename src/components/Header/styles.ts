import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(5),
    paddingRight: theme.spacing(6),
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
});
