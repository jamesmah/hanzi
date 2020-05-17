import React from "react";
import 按钮 from "react-bootstrap/Button";
import 容器 from "react-bootstrap/Container";
import { Link as 链接 } from "react-router-dom";
import 样式 from "styled-components";
import 主标头 from "../../组件/主标头";

const 首页 = () => (
  <>
    <主标头 />
    <容器 fluid>
      <内容>
        <链接 to="/radicals">
          <按钮 variant="primary">Radicals</按钮>
        </链接>
      </内容>
    </容器>
  </>
);

const 内容 = 样式.div`
  text-align: center;
`;

export default 首页;
