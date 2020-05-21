import React from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

const 未找到页面: React.FC<RouteComponentProps> = () => (
  <容器 fluid>
    <h1>未找到页面</h1>
  </容器>
);

const 容器 = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default 未找到页面;
