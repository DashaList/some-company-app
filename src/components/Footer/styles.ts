import { theme } from '@/theme';
import { tss } from 'tss-react';

export const useStyles = tss.create({
  root: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(7),
    marginTop: 'auto',
    backgroundColor: 'black',
    color: 'white',
    position: 'sticky',
    bottom: 0,
    zIndex: 10,
  },
});
