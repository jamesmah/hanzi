import { css, ThemedCssFunction } from "styled-components";

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

const notch = (...rules: ArgumentTypes<ThemedCssFunction<any>>) => css`
  // iPhone XR
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    ${css(...rules)}
  }

  // iPhone X/XS
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    ${css(...rules)}
  }

  // iPhone XS Max
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    ${css(...rules)}
  }
`;

export default {
  notch
};
