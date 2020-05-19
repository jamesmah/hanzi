import React from "react";
import 容器 from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import 数据 from "../../数据";
import 主标头 from "../../组件/主标头";

const 部首: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <主标头 />
      <容器 fluid>
        {数据.map((部首) => (
          <div key={部首.strokeNumber}>
            <p>画{部首.strokeNumber}</p>
            <ul>
              {部首.radicals.map((radical) => (
                <li key={radical.symbol}>
                  <Link to={`/radical/${radical.symbol}`}>
                    {radical.symbol}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </容器>
    </>
  );
};

export default 部首;
