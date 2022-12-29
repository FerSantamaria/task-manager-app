import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const StyledOutlet = styled(Outlet)`
  grid-area: content;
`

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />

      <StyledOutlet />
    </Container>
  )
}
