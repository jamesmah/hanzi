import React, { useMemo } from "react";
import 容器 from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import 数据 from "../../数据";
import 常见 from "../../数据/常见";

interface RouteParams {
  radical: string;
}

const 字表: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
  location
}) => {
  const { radical: 部首 } = match.params;
  const 显示所有 = new URLSearchParams(location.search).get("all") !== null;

  const 部首对象 = useMemo(() => {
    for (let i = 0; i < 数据.length; i++) {
      const 部首对象 = 数据[i].radicals.find((rad) => {
        return rad.symbol === 部首;
      });

      if (部首对象) {
        if (显示所有) return 部首对象;

        const 部首对象副本 = {
          ...部首对象
        };

        部首对象副本.strokeNumbers = 部首对象副本.strokeNumbers
          .map((strokeNumber) => ({
            ...strokeNumber,
            characters: strokeNumber.characters.filter((char) =>
              常见(char.character)
            )
          }))
          .filter((strokeNumber) => strokeNumber.characters.length > 0);

        return 部首对象副本;
      }
    }
  }, [部首, 显示所有]);

  return (
    <容器 fluid>
      {部首对象 ? (
        <div>
          <h2>{部首对象.symbol}</h2>
          <br />
          {部首对象.strokeNumbers.map((笔画数) => (
            <div key={笔画数.strokeNumber}>
              <p>画{笔画数.strokeNumber}</p>
              <ul>
                {笔画数.characters.map((字) => (
                  <li key={字.character}>
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
  );
};

export default 字表;
