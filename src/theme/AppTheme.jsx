import { ThemeProvider } from "styled-components"
import Global from "./../components/styled/Global.styled"
import { darkTheme } from "./darkTheme"
import { SkeletonTheme } from 'react-loading-skeleton'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SkeletonTheme baseColor="#222528" highlightColor="#2C2F33">
        <Global />
        { children }
      </SkeletonTheme>
    </ThemeProvider>
  )
}
