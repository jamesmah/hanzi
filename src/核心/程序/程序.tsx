import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import 主标头 from "../../组件/主标头";
import 字 from "../../页面/字";
import 字表 from "../../页面/字表";
import 未找到页面 from "../../页面/未找到页面";
import 首页 from "../../页面/首页";

const 程序 = () => (
  <Router basename="/">
    <主标头 />
    <内容>
      <Switch>
        <Route path="/" exact component={首页} />
        <Route path="/radical/:radical" exact component={字表} />
        <Route path="/character/:character" exact component={字} />
        <Route component={未找到页面} />
      </Switch>
    </内容>
  </Router>
);

const 内容 = styled.div`
  padding: 2rem 0;
`;

export default 程序;
