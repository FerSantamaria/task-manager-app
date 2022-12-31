import { ThemeProvider } from "styled-components"
import Global from "../components/styled/Global.styled"
import { darkTheme } from "./darkTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global />
      { children }
    </ThemeProvider>
  )
}
