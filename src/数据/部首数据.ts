import 部首数据 from "./部首数据.json";

export interface 接口部首 {
  序号: number;
  字: string;
  名称: string;
}

export interface 接口部首对象 {
  笔画数: number;
  部首数组: 接口部首[];
}

export default 部首数据 as 接口部首对象[];
