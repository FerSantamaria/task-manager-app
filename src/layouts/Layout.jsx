import { Outlet } from 'react-router-dom'
import { Container } from '../components/Container'
import { Sidebar } from '../components/Sidebar'

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  )
}
