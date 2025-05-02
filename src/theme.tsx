'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Times New Roman, serif',
      h1: {
        fontSize: '4rem',
        fontWeight: 'bold',
      },
      h2: {
        fontWeight: 'bold',
      },
      h3: {
        fontWeight: 'bold',
      },
      h4: {
        fontWeight: 'bold',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: '1.25rem',
            borderRadius: 8,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 700,
        md: 1050,
        lg: 1200,
        xl: 1536,
      },
    },
  }),
);
