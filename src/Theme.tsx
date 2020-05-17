import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {},
  fontSizes: {},
};

const Theme: React.FC<React.ReactNode> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
