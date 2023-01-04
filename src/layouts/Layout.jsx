import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { StyledContainer, SidebarWrapper, Wrapper } from '../styled/layouts/Layouts.styled'

export const Layout = () => {
  return (
    <StyledContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </StyledContainer>
  )
}
