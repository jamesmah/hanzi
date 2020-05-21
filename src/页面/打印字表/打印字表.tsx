import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";

const 打印字表: React.FC<RouteComponentProps> = () => {
  const settings = useContext(SettingsContext);
  return (
    <容器 fluid>
      {settings.data.map((部首) => (
        <section key={部首.strokeNumber}>
          <h4>画{部首.strokeNumber}</h4>
          <无序列表>
            {部首.radicals.map((radical, index) => (
              <li key={radical.symbol}>
                <strong>{radical.symbol}</strong>
              </li>
            ))}
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
