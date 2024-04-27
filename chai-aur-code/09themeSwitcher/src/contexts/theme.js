import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

// directly exporting the provider of the context
export const ThemeProvider = ThemeContext.Provider;

// exporting the context which can save extra imports in the file where this context is imported
export default function useTheme() {
    return useContext(ThemeContext);
}