import 数据 from "./数据.json";

export interface ICharacter {
  character: string;
  pinyins: string[];
  definitions: string[][];
  translations: string[];
  radical: string;
  additionalStrokes: number;
  totalStrokes: number;
  common: boolean;
}

interface IStrokeNumber {
  strokeNumber: number;
  characters: ICharacter[];
}

interface IRadical {
  symbol: string;
  names: string[];
  common: boolean;
  strokeNumbers: IStrokeNumber[];
  index?: number;
}

export interface IRadicalsByStrokeNumber {
  strokeNumber: number;
  radicals: IRadical[];
}

export default 数据 as IRadicalsByStrokeNumber[];
