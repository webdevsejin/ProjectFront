import { useCallback, useContext, useState } from "react"
import { ThemeContext } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";

const ThemeProvider = ({children}) => {
    const [ThemeMode,setThemeMode] = useState('light');
    const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;


return(
    <ThemeContext.Provider value={{ThemeMode, setThemeMode}}>
      <StyleProvider theme={themeObject}>
       { children }
      </StyleProvider>
    </ThemeContext.Provider>
)
}

function useTheme() {
    const context = useContext(ThemeContext);
    const {ThemeMode, setThemeMode} = context;

    const toggleTheme = useCallback(() => {
        if (ThemeMode ==="light") {
            setThemeMode("light")
        };
    }, [ThemeMode]);
    return[ ThemeMode, toggleTheme];
}

export {ThemeProvider, useTheme};
