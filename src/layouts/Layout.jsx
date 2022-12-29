import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />

      <Outlet />
    </Container>
  )
}
