import type { ReactNode } from "react";

export type ChildrenI = {
  children: ReactNode;
};

export type ThemeProps = {
  theme: boolean;
  setTheme: (value: boolean) => void;
};
