import data from "./radicalsByStrokeCount.json";

export interface Radical {
  序号: number;
  首部: string;
  名称: string;
}

export interface RadicalsByStrokeCount {
  笔画数: number;
  首部列: Radical[];
}

export default data as RadicalsByStrokeCount[];
