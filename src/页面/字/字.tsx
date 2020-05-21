import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import 数据 from "../../数据";

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
    <容器 fluid>
      {字对象 ? (
        <div>
          <h2>{字对象.character}</h2>
          <p>{字对象.pinyins.join(", ")}</p>
          <Section>
            <p>部首：{字对象.radical}</p>
            <p>部外：{字对象.additionalStrokes}</p>
            <p>总笔画：{字对象.totalStrokes}</p>
          </Section>
          <br />

          <h3>英文</h3>
          <ul>
            {字对象.translations.map((def, index) => (
              <li key={index}>{def}</li>
            ))}
          </ul>

          <br />
          <h3>字义</h3>
          {字对象.pinyins.map((pinyin, index) => (
            <div key={index}>
              <h4>{pinyin}</h4>
              <>
                <ul>
                  {字对象.definitions[index].map((definition, index) => (
                    <li key={index}>{definition}</li>
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
  );
};

const 容器 = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow: auto;
`;

const Section = styled.div`
  font-size: 1rem;

  p {
    margin-bottom: 0;
  }
`;

export default 字;
