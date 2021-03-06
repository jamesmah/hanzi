import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";

const 首页: React.FC<RouteComponentProps> = ({ location }) => {
  const settings = useContext(SettingsContext);
  return (
    <容器 fluid>
      {settings.data.map((部首) => (
        <section key={部首.strokeNumber}>
          <h4>画{部首.strokeNumber}</h4>
          <无序列表>
            {部首.radicals.map((radical) => (
              <li key={radical.symbol}>
                <Link to={`/radical/${radical.symbol}`}>
                  <strong>{radical.symbol}</strong>
                </Link>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  padding: 0;
  justify-items: center;

  li {
    padding: 0;
    list-style-type: none;
  }
`;

export default 首页;
