import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import 主标头 from "../../组件/主标头";
import 字 from "../../页面/字";
import 字表 from "../../页面/字表";
import 未找到页面 from "../../页面/未找到页面";
import 首页 from "../../页面/首页";

const 程序 = () => (
  <Page>
    <Route component={主标头} />
    <Switch>
      <Route path="/" exact component={首页} />
      <Route path="/radical/:radical" exact component={字表} />
      <Route path="/character/:character" exact component={字} />
      <Route component={未找到页面} />
    </Switch>
  </Page>
);

const Page = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

export default 程序;
