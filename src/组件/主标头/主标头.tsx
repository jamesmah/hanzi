import React from "react";
import Button from "react-bootstrap/Button";
import { RouteComponentProps } from "react-router-dom";
import 样式 from "styled-components";
import { notchHeight } from "../../utils/notch";

const 主标头: React.FC<RouteComponentProps> = ({ history, location }) => {
  const params = new URLSearchParams(location.search);
  const showAll = params.get("all") !== null;
  const showVerbose = params.get("verbose") !== null;

  const toggleCommon = () => {
    if (showAll) params.delete("all");
    else params.append("all", "true");
    history.replace(`${location.pathname}?${params.toString()}`);
  };

  const toggleCompact = () => {
    if (showVerbose) params.delete("verbose");
    else params.append("verbose", "true");
    history.replace(`${location.pathname}?${params.toString()}`);
  };

  return (
    <容器>
      {location.pathname !== "/" && (
        <按钮 onClick={() => history.goBack()}>⇦</按钮>
      )}
      <标题 onClick={() => history.push("/")}>汉字</标题>
      <ToggleContainer>
        <Toggle onClick={() => toggleCommon()}>
          {showAll ? "All" : "Common"}
        </Toggle>
        <Toggle onClick={() => toggleCompact()}>
          {showVerbose ? "Verbose" : "Compact"}
        </Toggle>
      </ToggleContainer>
    </容器>
  );
};

const ToggleContainer = 样式.div`
  grid-area: right;
  display: grid;
  grid-gap: 1rem;
`;

const Toggle = 样式.button`
  font-size: 0.5rem;
  width: 3rem;
  display: flex;
  justify-content: center;
`;

const 按钮 = 样式(Button).attrs({
  variant: "link"
})`
  color: white;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;

  &:hover,
  &:focus {
    text-decoration: none;
    color: white;
    outline: none;
    box-shadow: none;
  }
`;

const 容器 = 样式.header`
  height: ${5 + notchHeight}rem;
  padding-top: ${notchHeight}rem;
  background: blue;
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  grid-template-areas: "left center right";
  justify-items: center;
  align-items: center;
`;

const 标题 = 样式.h1`
  grid-area: center;
  color: white;
  cursor: pointer;
`;

export default 主标头;
