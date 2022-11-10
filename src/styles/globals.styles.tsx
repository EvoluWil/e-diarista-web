import { css, Global } from '@emotion/react';
import { useTheme } from '@mui/material';

export const GlobalStyles: React.FC = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: ${theme.palette.background.paper};
          font-family: 'Poppins', sans-serif;
        }
        html {
          overflow: auto;
        }
        body,
        input,
        textarea,
        select,
        button {
          font-family: 'Poppins', sans-serif;
        }
        button {
          cursor: pointer;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
};
