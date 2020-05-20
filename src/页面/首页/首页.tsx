import React from "react";
import 容器 from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";
import 数据 from "../../数据";

const 首页: React.FC<RouteComponentProps> = () => {
  return (
    <容器 fluid>
      {数据.map((部首) => (
        <div key={部首.strokeNumber}>
          <p>画{部首.strokeNumber}</p>
          <无序列表>
            {部首.radicals.map((radical) => (
              <li key={radical.symbol}>
                <Link to={`/radical/${radical.symbol}`}>{radical.symbol}</Link>
              </li>
            ))}
          </无序列表>
        </div>
      ))}
    </容器>
  );
};

const 无序列表 = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
  padding: 0;

  li {
    margin-left: 2rem;
  }
`;

export default 首页;
