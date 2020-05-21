import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";

const 打印部首: React.FC<RouteComponentProps> = () => {
  const settings = useContext(SettingsContext);
  return (
    <容器 fluid>
      {settings.data.map((部首, 部首index) => (
        <section key={部首.strokeNumber}>
          <h3>画{部首.strokeNumber}</h3>
          {部首.radicals.map((radical, radIndex) => {
            const charIndex =
              radIndex +
              1 +
              settings.data
                .slice(0, 部首index)
                .reduce(
                  (accum, strokeNumber) => accum + strokeNumber.radicals.length,
                  0
                );
            return (
              <p key={radical.symbol}>
                {charIndex}: {radical.symbol}
              </p>
            );
          })}
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

export default 打印部首;
