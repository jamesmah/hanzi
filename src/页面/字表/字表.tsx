import React, { useMemo } from "react";
import 容器 from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import 数据 from "../../数据";
import 主标头 from "../../组件/主标头";

interface RouteParams {
  radical: string;
}

const 字表: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { radical: 部首 } = match.params;

  const 部首对象 = useMemo(() => {
    for (let i = 0; i < 数据.length; i++) {
      const radicalGroup = 数据[i].radicals.find((rad) => {
        return rad.symbol === 部首;
      });

      if (radicalGroup) return radicalGroup;
    }
  }, [部首]);

  return (
    <>
      <主标头 />
      <容器 fluid>
        {部首对象 ? (
          <div>
            <p>{部首对象.symbol}</p>
            {部首对象.strokeNumbers.map((笔画数) => (
              <div key={笔画数.strokeNumber}>
                <p>画{笔画数.strokeNumber}</p>
                <ul>
                  {笔画数.characters.map((字) => (
                    <li>
                      <strong>
                        <Link to={`/character/${字.character}`}>
                          {字.character}
                        </Link>
                        : {字.pinyins.join(", ")}
                      </strong>
                      : {字.translations[0]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>未找到首部</p>
        )}
      </容器>
    </>
  );
};

export default 字表;
