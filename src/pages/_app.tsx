import { ThemeProvider, Box } from '@mui/material';
import { Footer } from 'components/surfaces/footer/footer.component';
import { Header } from 'components/surfaces/header/header.component';
import { MainProvider } from 'data/contexts/main-provider.context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo } from 'react';
import { GlobalStyles } from 'styles/globals.styles';
import { lightTheme } from 'styles/themes/light-theme.styles';

const App = ({ Component, pageProps }: AppProps) => {
  const title = useMemo(() => {
    if (pageProps?.title) {
      return `${pageProps.title} | e-diarista`;
    }
    return `e-diarista`;
  }, [pageProps.title]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <MainProvider>
          <GlobalStyles />
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </MainProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
