import { BrowserRouter } from "react-router-dom"
import { ApolloContext } from "./contexts/ApolloContext"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const TaskManagerApp = () => {
  return (
    <ApolloContext>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </ApolloContext>
  )
}
