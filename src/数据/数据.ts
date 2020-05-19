import 数据 from "./数据.json";

interface ICharacter {
  character: string;
  pinyins: string[];
  definitions: string[][];
  translations: string[];
  radical: string;
  additionalStrokes: number;
  totalStrokes: number;
}

interface IStrokeNumber {
  strokeNumber: number;
  characters: ICharacter[];
}

interface IRadical {
  symbol: string;
  names: string[];
  strokeNumbers: IStrokeNumber[];
}

interface IRadicalsByStrokeNumber {
  strokeNumber: number;
  radicals: IRadical[];
}

export default 数据 as IRadicalsByStrokeNumber[];
