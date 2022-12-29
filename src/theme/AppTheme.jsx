import { ThemeProvider } from "styled-components"
import { darkTheme } from "./darkTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      { children }
    </ThemeProvider>
  )
}
