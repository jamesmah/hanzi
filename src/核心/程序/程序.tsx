import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 字 from "../../页面/字";
import 字表 from "../../页面/字表";
import 未找到页面 from "../../页面/未找到页面";
import 部首 from "../../页面/部首";
import 首页 from "../../页面/首页";

const 程序 = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={首页} />
      <Route path="/radicals" exact component={部首} />
      <Route path="/radical/:radical" exact component={字表} />
      <Route path="/character/:character" exact component={字} />
      <Route component={未找到页面} />
    </Switch>
  </Router>
);

export default 程序;
