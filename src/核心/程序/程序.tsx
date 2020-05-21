import React, { useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";
import 数据, { IRadicalsByStrokeNumber } from "../../数据";
import 主标头 from "../../组件/主标头";
import 字 from "../../页面/字";
import 字表 from "../../页面/字表";
import 未找到页面 from "../../页面/未找到页面";
import 首页 from "../../页面/首页";

const 程序: React.FC = () => {
  const [all, setAll] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const toggleAll = () => setAll(!all);
  const toggleVerbose = () => setVerbose(!verbose);

  const data = useMemo(() => {
    if (all) return 数据;
    const data: IRadicalsByStrokeNumber[] = JSON.parse(JSON.stringify(数据));

    data.forEach((s) => {
      s.radicals.forEach((r) => {
        r.strokeNumbers.forEach((n) => {
          n.characters = n.characters.filter((c) => c.common);
        });
      });
    });

    data.forEach((s) => {
      s.radicals.forEach((r) => {
        r.strokeNumbers = r.strokeNumbers.filter((n) =>
          n.characters.some((c) => c.common)
        );
      });
    });

    data.forEach((s) => {
      s.radicals = s.radicals.filter((r) => r.common);
    });

    return data.filter((s) => s.radicals.length > 0);
  }, [all]);

  return (
    <SettingsContext.Provider
      value={{
        all,
        toggleAll,
        verbose,
        toggleVerbose,
        data
      }}
    >
      <Page>
        <Route component={主标头} />
        <Switch>
          <Route path="/" exact component={首页} />
          <Route path="/radical/:radical" exact component={字表} />
          <Route path="/character/:character" exact component={字} />
          <Route component={未找到页面} />
        </Switch>
      </Page>
    </SettingsContext.Provider>
  );
};

const Page = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
`;

export default 程序;
