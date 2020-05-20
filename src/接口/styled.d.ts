import 主题 from "../核心/主题";

type I主题 = typeof 主题;

declare module "styled-components" {
  interface DefaultTheme extends I主题 {}
}
