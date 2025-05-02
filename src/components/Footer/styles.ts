import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(7),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.paper,
    position: 'sticky',
    bottom: 0,
    zIndex: 10,
  },
});
