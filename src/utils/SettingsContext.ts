import React from "react";
import { IRadicalsByStrokeNumber } from "../数据";

export interface SettingsContextValues {
  all: boolean;
  toggleAll: () => void;
  verbose: boolean;
  toggleVerbose: () => void;
  data: IRadicalsByStrokeNumber[];
}

const SettingsContext = React.createContext<SettingsContextValues>({
  all: false,
  toggleAll: () => {},
  verbose: false,
  toggleVerbose: () => {},
  data: []
});

export default SettingsContext;
