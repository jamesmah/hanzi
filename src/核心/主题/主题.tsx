import React from "react";
import { ThemeProvider } from "styled-components";
import 字体大小 from "./字体大小";
import 颜色 from "./颜色";

const 主题: React.FC<React.ReactNode> = ({ children }) => (
  <ThemeProvider
    theme={{
      颜色,
      字体大小
    }}
  >
    {children}
  </ThemeProvider>
);

export default 主题;
