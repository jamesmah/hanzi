import React, { useMemo } from "react";
import 容器 from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import 数据 from "../../数据";
import 主标头 from "../../组件/主标头";

interface RouteParams {
  character: string;
}

const 字: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { character: 字 } = match.params;

  const 字对象 = useMemo(() => {
    for (let i = 0; i < 数据.length; i++) {
      const { radicals } = 数据[i];
      for (let j = 0; j < radicals.length; j++) {
        const { strokeNumbers } = radicals[j];
        for (let k = 0; k < strokeNumbers.length; k++) {
          const characters = strokeNumbers[k].characters;
          const characterGroup = characters.find((char) => {
            return char.character === 字;
          });

          if (characterGroup) return characterGroup;
        }
      }
    }
  }, [字]);

  return (
    <>
      <主标头 />
      <容器 fluid>
        {字对象 ? (
          <div>
            <h2>{字对象.character}</h2>
            <p>{字对象.pinyins.join(", ")}</p>
            <p>部首：{字对象.radical}</p>
            <p>部外：{字对象.additionalStrokes}</p>
            <p>总笔画：{字对象.totalStrokes}</p>
            <p>英文：{字对象.translations[0]}</p>

            <br />
            <h3>字义</h3>
            {字对象.pinyins.map((pinyin, index) => (
              <div>
                <p>
                  <strong>{pinyin}</strong>
                </p>
                <>
                  <ul>
                    {字对象.definitions[index].map((definition) => (
                      <li>{definition}</li>
                    ))}
                  </ul>
                </>
              </div>
            ))}
          </div>
        ) : (
          <p>未找到字</p>
        )}
      </容器>
    </>
  );
};

export default 字;
