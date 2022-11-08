import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'styles/globals.styles';
import { lightTheme } from 'styles/themes/light-theme.styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
