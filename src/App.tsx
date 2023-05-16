import { CssBaseline, ThemeProvider } from "@mui/material"
import type { Theme } from "@mui/material"

import { ColorModeContext, useMode } from "./theme"

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app"></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
