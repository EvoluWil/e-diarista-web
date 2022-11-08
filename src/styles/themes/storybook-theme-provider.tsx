import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme } from './light-theme.styles';
import { GlobalStyles } from 'styles/globals.styles';

export const StorybookThemeProvider = (storyFn: any) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <EmotionThemeProvider theme={lightTheme}>{storyFn()}</EmotionThemeProvider>
  </ThemeProvider>
);
