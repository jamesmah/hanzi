/* eslint-disable import/order */
import 部首_画1 from "./部首_画1.json";
import 部首_画2 from "./部首_画2.json";
import 部首_画3 from "./部首_画3.json";
import 部首_画4 from "./部首_画4.json";
import 部首_画5 from "./部首_画5.json";
import 部首_画6 from "./部首_画6.json";
import 部首_画7 from "./部首_画7.json";
import 部首_画8 from "./部首_画8.json";
import 部首_画9 from "./部首_画9.json";
import 部首_画10 from "./部首_画10.json";
import 部首_画11 from "./部首_画11.json";
import 部首_画12 from "./部首_画12.json";
import 部首_画13 from "./部首_画13.json";
import 部首_画14 from "./部首_画14.json";
/* eslint-enable import/order */

export interface 接口部首 {
  序号: number;
  字: string;
  名称: string;
}

export interface 接口部首对象 {
  笔画数: number;
  部首数组: 接口部首[];
}

const 部首数据 = [
  部首_画1,
  部首_画2,
  部首_画3,
  部首_画4,
  部首_画5,
  部首_画6,
  部首_画7,
  部首_画8,
  部首_画9,
  部首_画10,
  部首_画11,
  部首_画12,
  部首_画13,
  部首_画14
];

export default 部首数据 as 接口部首对象[];
