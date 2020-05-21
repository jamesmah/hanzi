import React, { useContext, Fragment, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";
import { ICharacter } from "../../数据";
import 字表组件 from "../../组件/字表组件";

const 打印字表: React.FC<RouteComponentProps> = () => {
  const settings = useContext(SettingsContext);

  return (
    <容器 fluid>
      {settings.data.map((部首, 部首index) => (
        <section key={部首.strokeNumber}>
          <无序列表>
            {部首.radicals.map((radical, radIndex) => {
              const charIndex =
                radIndex +
                1 +
                settings.data
                  .slice(0, 部首index)
                  .reduce(
                    (accum, strokeNumber) =>
                      accum + strokeNumber.radicals.length,
                    0
                  );
              const characters = radical.strokeNumbers.reduce(
                (accum, strokeNumber) => {
                  return [...accum, ...strokeNumber.characters];
                },
                [] as ICharacter[]
              );
              return (
                <Fragment key={radical.symbol}>
                  <h1>
                    {charIndex}: {radical.symbol}
                  </h1>
                  <字表组件 characters={characters} />
                </Fragment>
              );
            })}
          </无序列表>
        </section>
      ))}
    </容器>
  );
};

const 容器 = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow: auto;
`;

const 无序列表 = styled.ul`
  padding: 0;

  li {
    padding: 0;
    list-style-type: none;
  }
`;

export default 打印字表;
