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
    palette: {
      primary: {
        main: '#6C63FF',
        light: '#9089FF',
        dark: '#4A43CC',
      },
      secondary: {
        main: '#A4D65E',
        light: '#C2E68C',
        dark: '#8AB84E',
      },
      background: {
        default: '#F8F9FF',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2D3748',
        secondary: '#718096',
      },
      error: {
        main: '#FF5252',
      },
      warning: {
        main: '#FFC107',
      },
      info: {
        main: '#03A9F4',
      },
      success: {
        main: '#4CAF50',
      },
    },
  }),
);
