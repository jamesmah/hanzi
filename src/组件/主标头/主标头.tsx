import React from "react";
import 容器 from "react-bootstrap/Container";
import 样式 from "styled-components";

const 主标头 = () => (
  <容器 fluid>
    <标头>
      <标题>汉子</标题>
    </标头>
  </容器>
);

const 标头 = 样式.header`
  padding: 2rem 0;
  text-align: center;
`;

const 标题 = 样式.h1`
  color: #61dafb;
`;

export default 主标头;
