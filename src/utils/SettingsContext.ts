import React from "react";

export interface SettingsContextValues {
  all: boolean;
  toggleAll: () => void;
  verbose: boolean;
  toggleVerbose: () => void;
}

const SettingsContext = React.createContext<SettingsContextValues>({
  all: false,
  toggleAll: () => {},
  verbose: false,
  toggleVerbose: () => {}
});

export default SettingsContext;
