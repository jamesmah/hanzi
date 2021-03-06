import React, { useMemo, useContext } from "react";
import Container from "react-bootstrap/Container";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";

interface RouteParams {
  radical: string;
}

const 字表: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { radical: 部首 } = match.params;

  const settings = useContext(SettingsContext);

  const 部首对象 = useMemo(() => {
    for (let i = 0; i < settings.data.length; i++) {
      const 部首对象 = settings.data[i].radicals.find((rad) => {
        return rad.symbol === 部首;
      });

      if (部首对象) return 部首对象;
    }
  }, [settings.data, 部首]);

  if (!部首对象) {
    return (
      <容器 fluid>
        <p>未找到首部</p>
      </容器>
    );
  }

  return (
    <容器 fluid>
      <h2>{部首对象.symbol}</h2>
      {部首对象.names.length > 0 && (
        <名称>名称：{部首对象.names.join(", ")}</名称>
      )}
      <br />
      {部首对象.strokeNumbers.map((笔画数) => (
        <section key={笔画数.strokeNumber}>
          <h4>画{笔画数.strokeNumber}</h4>
          {settings.verbose ? (
            <VerboseList>
              {笔画数.characters.map((字) => (
                <列表项目 key={字.character}>
                  <Link to={`/character/${字.character}`}>
                    <strong>{字.character}</strong>
                  </Link>
                  : {字.pinyins.join(", ")}: <翻译>{字.translations[0]}</翻译>
                </列表项目>
              ))}
            </VerboseList>
          ) : (
            <无序列表>
              {笔画数.characters.map((字) => (
                <li key={字.character}>
                  <Link to={`/character/${字.character}`}>
                    <strong>{字.character}</strong>
                  </Link>
                </li>
              ))}
            </无序列表>
          )}
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

const 名称 = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
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

const VerboseList = styled.ul`
  padding-left: 0.5rem;
`;

const 列表项目 = styled.li`
  line-height: 1.25rem;
  padding: 0.4rem 0;
  list-style-type: none;
`;

const 翻译 = styled.span`
  font-size: 0.75rem;
`;

export default 字表;
