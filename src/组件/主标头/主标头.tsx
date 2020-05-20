import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import 样式 from "styled-components";
import { notchHeight } from "../../utils/notch";

const 主标头 = () => {
  let history = useHistory();
  let location = useLocation();
  return (
    <>
      <Padding />
      <固定>
        <标头>
          {location.pathname !== "/" && (
            <按钮 onClick={() => history.goBack()}>⇦</按钮>
          )}
          <标题 onClick={() => history.push("/")}>汉字</标题>
          {/* <按钮 onClick={() => history.goForward()}>⇨</按钮> */}
        </标头>
      </固定>
    </>
  );
};

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

const Padding = 样式.div`
  height: ${(props) => props.theme.号码.标头高度};
`;

const 固定 = 样式.div`
  height: ${(props) => props.theme.号码.标头高度};
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: ${notchHeight}rem;
`;

const 标头 = 样式.header`
  height: 100%;
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  grid-template-areas: "left center right";
  justify-items: center;
  align-items: center;
`;

const 标题 = 样式.h1`
  grid-area: center;
  color: white;
`;

export default 主标头;
