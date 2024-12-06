import { createContext, useState } from "react";
import type { ChildrenI, ThemeProps } from "../interfaces/theme";

export const ThemeContext = createContext<ThemeProps | null>(null);

export default function ThemeProvider({ children }: ChildrenI) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
